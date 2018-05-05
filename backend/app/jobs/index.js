import schedule from 'node-schedule'
import { andPersonInFriend } from "app/services/vk/methods"
import { getRandomInt } from "app/services/utils"

const buildRule = () => {
  const number = getRandomInt(50, 59)

  let rule = new schedule.RecurrenceRule()
  rule.minute = new schedule.Range(0, 59, number)

  return rule
}

const run = async () => {
  await andPersonInFriend()
}

schedule.scheduleJob(buildRule(), async () => { await run() })
