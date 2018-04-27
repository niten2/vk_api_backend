import R from "ramda"
import { Tag, Group } from "api/models"

const ALLOWED_TYPES = {
  tag: Tag,
  group: Group,
}

export default (req) => {

  const page = R.path(["query", "page"], req)
  const include = R.path(["query", "include"], req)
  let object = {}

  if (R.path(["size"], page)) {
    object.limit = page.size
  }

  if (R.path(["number"], page) && R.path(["size"], page)) {
    object.offset = (page.number - 1) * (page.size || 0)
  }


  if (include) {
    object.include = ({ model: ALLOWED_TYPES[include] })
  }

  return object
}
