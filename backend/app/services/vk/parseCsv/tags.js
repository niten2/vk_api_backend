import { Tag } from "api/models"

const createObjects = async (object) => {
  await Tag.create({
    id: object["id"],
    name: object["name"],
    status: object["status"],
    kind: object["kind"],
  })
}

export default createObjects
