import Queue from "bull"
import logger from "app/services/logger"
import pubsub, { SUBSCRIBE_TO_SET_INFO_VK_PERSONS } from "app/graphql/pubsub"
import { VkPerson, User } from "app/models"
import { delay } from "app/services/utils"
import { infoVkUser } from "app/services/vk/methods"
import settings from "config/settings"

const vkPersonsQueueProcess = async (job) => {
  try {
    await delay(1000)

    const { vkPersonId, userId } = job.data
    const user = await User.findById(userId)
    const vkPerson = await VkPerson.findById(vkPersonId)

    let res = await infoVkUser(user, vkPerson)

    vkPerson.set(res)
    await vkPerson.save()

    const message = `vk person uid = ${vkPerson.uid} updated`

    pubsub.publish(SUBSCRIBE_TO_SET_INFO_VK_PERSONS, { subscribeToSetInfoVkPersons: { message } })
    logger.info(message)

  } catch (err) {
    logger.error(err)
  }

}

const vkPersonsQueue = new Queue("vkPersonsQueue", settings.redisUrl)

vkPersonsQueue.process(vkPersonsQueueProcess)

export default vkPersonsQueue
