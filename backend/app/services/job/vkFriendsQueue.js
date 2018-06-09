import Queue from "bull"
import settings from "config/settings"
import logger from "app/services/logger"
import { User, VkPerson } from "app/models"
import { andPersonInFriendUser } from "app/services/vk/methods"
import { getRandomInt, minutesToMilliseconds } from "app/services/utils"

export const vkFriendsQueue = new Queue("vkFriendsQueue", settings.redisUrl)

export const startVkFriendsJob = async () => {
  logger.debug(`start job`)

  try {
    const users = await User.findAll({
      where: {
        vk_active: true
      }
    })

    const checkAndAddNewJob = async (user) => {
      if (await user.isFriendNeed() && await user.hasDesiredFriends()) {
        addNewJob(user)
      }
    }

    users.map(checkAndAddNewJob)
  } catch (err) {
    logger.error(err.message)
  }
}

export const vkFriendsQueueProcess = async (job) => {
  try {
    const { data } = job
    const user = await User.findById(data.userId)

    await andPersonInFriendUser(user)

    return { userId: data.userId }
  } catch (err) {
    logger.error(err.message)
  }
}

export const vkFriendsQueueOnCompleted = async (job, data) => {
  try {
    const user = await User.findById(data.userId)

    if (await user.isFriendNeed() && await user.hasDesiredFriends()) {
      addNewJob(user)
    }
  } catch (err) {
    logger.error(err.message)
  }
}

// NOTE private
const addNewJob = async (user) => {
  const delay = getRandomInt(minutesToMilliseconds(30), minutesToMilliseconds(60))

  logger.debug(`add new job, user.id = ${user.id}, DELAY = ${delay}`)

  vkFriendsQueue.add({ userId: user.id }, { delay })
}

vkFriendsQueue.process(vkFriendsQueueProcess)
vkFriendsQueue.on('completed', vkFriendsQueueOnCompleted)
