import { Group } from "api/models"

const createObjects = async (object) => {
  await Group.create({
    gid: object["gid"]
  })
}

export default createObjects
