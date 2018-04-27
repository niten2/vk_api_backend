import { isEmpty } from "ramda"
import { vkPerson } from "app/models"
import { checkAndSetFriend } from "app/services/vk/methods"

const main = async () => {
  try {
    const persons = await vkPerson.findAll()

    if (isEmpty(persons)) {
      throw new Error("persons not found")
    }

    await Promise.all(persons.map(checkAndSetFriend))

  } catch (err) {
    console.log(err)
  }
}

main()
