import { vkPerson } from "app/models"
import { getFile } from "app/services/files"

const main = async () => {
  try {
    const ids = await getFile("vk_ids.txt")

    await Promise.all(
      ids.split("\n").filter((id) => id !== "").map(async (id) => {

        try {
          await vkPerson.create({ uid: id })
          console.log(`vkPerson create ${id}`)
        } catch (err) {
          console.log("--------------")
          console.log(id, err)
        }

      })
    )

  } catch (err) {
    console.log(err)
  }
}

main()
