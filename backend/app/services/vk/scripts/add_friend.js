// import { isEmpty } from "ramda"
// import { vkPerson } from "app/models"
import { andPersonInFriend } from "app/services/vk/methods"

const main = async () => {
  await andPersonInFriend()
}

main()
