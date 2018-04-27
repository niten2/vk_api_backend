import schedule from 'node-schedule'
import { andPersonInFriend } from "app/services/vk/methods"
import { getRandomArbitrary } from "app/services/utils"

const buildRule = () => {
  const number = getRandomArbitrary(1, 3)
  console.log(number)

  let rule = new schedule.RecurrenceRule()
  rule.minute = new schedule.Range(0, 59, number)

  return rule
}

const run = async () => {
  console.log(11111)
  // await andPersonInFriend()
}

schedule.scheduleJob(buildRule(), async () => { await run() })
