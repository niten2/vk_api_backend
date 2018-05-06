import schedule from 'node-schedule'
import { andPersonInFriendFirstUserWithLimit } from "app/services/vk/methods"
import { getRandomInt } from "app/services/utils"

const buildRule = () => {
  const number = getRandomInt(30, 59)

  let rule = new schedule.RecurrenceRule()

  rule.minute = new schedule.Range(0, 59, number)

  return rule
}

const run = async () => {
  await andPersonInFriendFirstUserWithLimit()
}

schedule.scheduleJob(buildRule(), async () => { await run() })
