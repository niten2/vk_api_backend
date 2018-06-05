import { vkPersonsQueue } from "app/jobs/queue"
import { infoVkUser } from "app/services/vk/methods"
import logger from "app/services/logger"
import Queue from "bull"
import settings from "config/settings"
import settings from "config/settings"


import pubsub, { SUBSCRIBE_TO_SET_INFO_VK_PERSONS } from "app/graphql/pubsub"


const vkPersonsQueueProcess = async (job) => {
  const { data } = job



  pubsub.publish(SUBSCRIBE_TO_SET_INFO_VK_PERSONS, { message: "zzzzzzzzzzzzzz" })

  // let res = await infoVkUser(data.user, data.person)

  // data.person.set(res)
  // await data.person.save()
}

const vkPersonsQueue = new Queue("vkPersonsQueue", settings.redisUrl)
vkPersonsQueue.process(vkPersonsQueueProcess)


export default vkPersonsQueue
