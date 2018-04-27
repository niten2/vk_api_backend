import { User } from "api/models"



const createPersons = async () => {
  const ids = await getFile("vk_ids.txt")

  ids.map((id) => {

    console.log(id)
    // await User.create()
  })
}
