import { User } from "api/models"
import { getFile } from "app/servises/files"

const main = async () => {
  const ids = await getFile("vk_ids.txt")

  await Promise.all(
    ids.map(async (id) => {
      await User.create()
    })
  )
}

main()
