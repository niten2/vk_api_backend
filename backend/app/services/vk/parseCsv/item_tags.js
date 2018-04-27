import { itemTag } from "api/models"

const createObjects = async (object) => {
  await itemTag.create({
    tag_id: object["tag_id"],
    taggable_id: object["target_id"],
    taggable: object["target_type"],
  })
}

export default createObjects
