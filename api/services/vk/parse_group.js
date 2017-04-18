import vk from "config/initialize/vk"
import { replace } from "lodash"
import Models from "api/models"

let { Group } = Models

const parseUrl = (url) => {
  let name = url.split("/").pop()
  let screenName = replace( replace( name, new RegExp("/^club/"), ""), new RegExp("/^public/"), "")
  return screenName
}

export default async (url) => {
  let screenName = parseUrl(url)

  let responses = await vk.api.groups.getById({
    group_id: screenName,
    fields: [
      "members_count",
      "photo_50",
    ],
  })
  let response = responses[0]

  let objects = await Group.findOrCreate({
    where: { screen_name: screenName },
  })
  let object = objects[0]

  await object.update({
    name: response.name,
    members_count: response.members_count,
    photo_50: response.photo_50,
    status: "active",
  })

  return object
}
