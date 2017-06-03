import { Tag, Group } from "api/models"
import R from "ramda"

const ALLOWED_TYPES = {
  tag: Tag,
  group: Group,
}

const addLimit = R.curry((req, object) => {
  const page = req.query.page

  if (page.size) {
    return R.merge(object, { limit: page.size})
  } else {
    return object
  }
})

const addOffset = R.curry((req, object) => {
  const page = req.query.page

  if (page.number && page.size) {
    return R.merge(
      object,
      { offset: (page.number - 1) * (page.size || 0) }
    )
  } else {
    return object
  }

})

const addInclude = R.curry((req, object) => {
  const include = req.query.include

  if (include) {
    object.include = ({ model: ALLOWED_TYPES[include] })
  }

  return object
})

const createQuery = R.pipe(
  addLimit,
  addOffset,
  addInclude,
)

export default createQuery
// export default (req) => {
//   return createQuery(req)
// }
