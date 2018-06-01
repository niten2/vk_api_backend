import { vkPersons } from "./vk_persons"
import { me, updateMe } from "./me"
import { settings } from "./settings"
import { createUser } from "./users"
import { createToken } from "./auth"
import { createVkFriends } from "./vk_firends"
import { testLog, logs, subscribeToLog } from "./logs"

const Query = {
  vkPersons,
  me,
  settings,
  testLog,
  logs,
}

const Mutation = {
  createUser,
  updateMe,
  createToken,
  createVkFriends,
}

const Subscription = {
  subscribeToLog,
}

export default { Query, Mutation, Subscription }
