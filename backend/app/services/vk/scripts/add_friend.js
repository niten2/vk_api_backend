// import { andPersonInFriend } from "app/services/vk/methods"
import { User } from "app/models"
import { andPersonInFriendUser } from "app/services/vk/methods"

const main = async () => {
  const user = await User.findById(1)

  await andPersonInFriendUser(user.id)
}

main()
