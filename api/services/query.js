
const createQuery = function(req, models = {}) {

  if (tag_id) {
    query.include.push({
      model: Tag,
      where: { id: tag_id },
    })
  }

  filter.map(attr => {
    query["where"] = { status: attr }
  })

  return query
}




export default (req, models = {}) => {
  let query = { include: [] }
  let tag_id = req.query.tag_id || null
  let filter = req.query.filter || []
  let Tag = models.tag


}
