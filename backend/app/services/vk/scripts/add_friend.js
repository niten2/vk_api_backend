import { User } from "app/models"
import { andPersonInFriendWithLimit } from "app/services/vk/methods"

const main = async () => {
  await andPersonInFriendWithLimit()
}

main()
