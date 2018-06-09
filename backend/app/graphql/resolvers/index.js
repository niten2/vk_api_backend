import { me, updateMe } from "./me"
import { settings } from "./settings"
import { createUser } from "./users"
import { createToken } from "./auth"
import { createVkFriends } from "./vk_firends"
import { testLog, logs, subscribeToLog } from "./logs"
import { vkPersons, setInfoVkPersons, subscribeToSetInfoVkPersons } from "./vk_persons"

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
  setInfoVkPersons,
}

const Subscription = {
  subscribeToLog,
  subscribeToSetInfoVkPersons,
}

export default { Query, Mutation, Subscription }
