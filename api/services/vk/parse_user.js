import vk from "config/initialize/vk"
import { replace } from "lodash"

import Models from "api/models"

let { User } = Models

export default async (url) => {
  let uid = replace(replace(url, "https://vk.com/", ""), "id", "")

  let responses = await vk.api.users.get({
    user_ids: uid,
    fields: [
      "followers_count",
      "sex",
      "bdate",
      "city",
      "personal",
      "status",
      "crop_photo",
    ],
  })
  let response = responses[0]

  let objects = await User.findOrCreate({
    where: { uid: uid },
  })

  let object = objects[0]

  await object.update({
    first_name: response.first_name,
    last_name: response.last_name,
    followers_count: response.followers_count,
    sex: response.sex,
    city: response.city == 72 ? "krsk" : "not found",
    bdate: response.bdate,
    crop_photo_url: response.crop_photo.photo.photo_75,
    status: "active",
  })

  return object
}
