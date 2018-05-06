import vk from "config/initialize/vk"
import { Group } from "api/models"
import R from "ramda"

const parseUrl = R.pipe(
  R.split("/"),
  R.last,
  R.replace(/^club/, ""),
  R.replace(/^event/, ""),
  R.replace(/^public/, ""),
  R.replace("event", ""),
  R.replace("\'", ""),
)

const parseGroup = async (url) => {
  try {
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
  } catch(error) {
    console.log("=>>>", error.name, error.message)
  }
}

export default parseGroup
