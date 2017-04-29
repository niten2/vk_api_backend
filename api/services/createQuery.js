import { Tag, Group } from "api/models"

const createQuery = (req) => {
  let query = { include: [] }
  let tag_id = req.query.tag_id || null
  let filter = req.query.filter || []
  let include = req.query.include || []

  // if (tag_id) {
  //   query.include.push({
  //     model: Tag,
  //     where: { id: tag_id },
  //   })
  // }

  // filter.map(attr => {
  //   query["where"] = { status: attr }
  // })

  // // console.log(req.query.include)

  if (req.query.include == "tag") {
    query.include.push({
      model: Tag,
    })
  }

  return query
}

export default createQuery
