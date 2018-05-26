import schedule from 'node-schedule'
import { andPersonInFriendWithLimit } from "app/services/vk/methods"
import { getRandomInt } from "app/services/utils"
import logger from "app/services/logger"
import settings from 'config/settings'

logger.info(`start new job`)

const buildRule = () => {
  const number = getRandomInt(30, 59)

  let rule = new schedule.RecurrenceRule()

  // rule.minute = new schedule.Range(0, 59, number)
  rule.minute = new schedule.Range(0, 59, 1)

  return rule
}

const run = async () => {
  await andPersonInFriendWithLimit()
}

schedule.scheduleJob(buildRule(), async () => {
  try {
    await run()
  } catch (err) {
    logger.error(err.message)
  }
})
