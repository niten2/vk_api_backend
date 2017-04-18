import vk from "api/lib/vk/vk"
import { replace } from "lodash"

import Models from "api/models"

let { Group } = Models

export default async (url) => {

  let uid = replace(replace(url, "https://vk.com/", ""), "id", "")

  let objects = await Group.findOrCreate({
    where: { uid: uid },
  })

  let object = objects[0]

  let users = await vk.api.users.get({
    user_ids: uid,
    fields: [
      "sex",
      "bdate",
      "city",
      "followers_count",
      "personal",
      "status",
      "crop_photo",
    ],
  })
  let user = users[0]

  await object.update({
    first_name: user.first_name,
    last_name: user.last_name,
  })

  return object
}
