import { isEmpty } from "ramda"
import { vkPerson } from "app/models"
import { checkFriend } from "app/services/vk/actions"

const main = async () => {
  try {
    const persons = await vkPerson.findAll()

    if (isEmpty(persons)) {
      throw new Error("persons not found")
    }

    const setFriend = async (person) => {
      const isFriend = await checkFriend(person.uid)

      await person.set({ isFriend })
      await person.save()

      console.log(person.uid, person.isFriend)
    }

    await Promise.all(persons.map(setFriend))
  } catch (err) {
    console.log(err)
  }
}

main()
