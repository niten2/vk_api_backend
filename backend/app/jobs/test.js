import Queue from "bull"
import { User, VkPerson } from "app/models"
import { andPersonInFriendUser } from "app/services/vk/methods"
import { getRandomInt, minutesToMilliseconds } from "app/services/utils"
import settings from "config/settings"
import logger from "app/services/logger"

const vkFriendsQueue = new Queue("vk friends", settings.redisUrl)

const checkAndAddJob = async (user) => {
  if (await user.isFriendNeed()) {
    const delay = getRandomInt(minutesToMilliseconds(30), minutesToMilliseconds(60))

    logger.debug(`add new job, user.id = ${user.id}, DELAY = ${delay}`)

    vkFriendsQueue.add({ userId: user.id }, { delay })
  } else {
    logger.debug(`user id, ${user.id}, user enough friend`)
  }
}

const startNewJob = async () => {
  logger.debug(`start new job`)

  const users = await User.findAll({ where: { vk_active: true } })

  await Promise.all(users.map(checkAndAddJob))
}

vkFriendsQueue.process(async (job) => {
  const { data } = job

  const user = await User.findById(data.userId)

  await andPersonInFriendUser(user)

  return { userId: data.userId }
})

vkFriendsQueue.on('completed', async (job, data) => {
  const user = await User.findById(data.userId)

  await checkAndAddJob(user)
})

startNewJob()
