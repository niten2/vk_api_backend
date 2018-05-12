import { User, VkPerson } from "app/models"
import factory from "test/factory"

const vk_token = "token"

const main = async () => {
  try {
    const users = await User.findAll()

    const updatePassword = async (user) => {
      await user.set({ password: "12345" })
      await user.save()
    }

    await Promise.all(
      await users.map(updatePassword)
    )

    // const user = await factory.create("user", {
    //   id: 2,
    //   name: "name",
    //   email: "test@email.com",
    //   password: "12345",
    //   vk_token,
    // })

    // const vkPersons = await VkPerson.findAll()

    // const setUserId = async person => {
    //   person.set({ user_id: 1 })
    //   await person.save()
    // }

    // await Promise.all(vkPersons.map(setUserId))

  } catch (err) {
    console.log(err)
  }
}

main()
