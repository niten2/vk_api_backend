import schedule from 'node-schedule'
import { andPersonInFriendFirstUserWithLimit } from "app/services/vk/methods"
import { getRandomInt } from "app/services/utils"

const buildRule = () => {
  // const number = getRandomInt(50, 59)
  const number = getRandomInt(58, 59)

  let rule = new schedule.RecurrenceRule()
  rule.minute = new schedule.Range(0, 59, number)

  console.log(rule)

  return rule
}

const run = async () => {
  console.log("run andPersonInFriendFirstUserWithLimit")

  await andPersonInFriendFirstUserWithLimit()
}

schedule.scheduleJob(buildRule(), async () => { await run() })
