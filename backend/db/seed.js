import { User, VkPerson } from "app/models"
import factory from "test/factory"
import moment from "moment"

const vk_token = "vk_token"

const main = async () => {
  try {

    const user = await factory.create("user", {
      id: 1,
      name: "name",
      email: "test@test.com",
      password: "12345",
      vk_token,
    })

    const vkPerson1 = await factory.create("vkPerson", { user_id: user.id, addFriendAt: moment().add(-10, "days") })
    const vkPerson2 = await factory.create("vkPerson", { user_id: user.id, addFriendAt: moment() })

  } catch (err) {
    console.log(err)
  }
}

main()
