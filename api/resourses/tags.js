import { pick } from 'lodash'

const params = function(req) {
  return pick(req.body, [
  	'name',
  	'kind',
  ])
}

export default (context) => {

  const Tag = context.models.Tag
  const User = context.models.User
  const ItemTag = context.models.ItemTag

  const resource = {

    async index(req, res, next) {
      try {
        let kind = req.query.kind
        let tags

        if (kind) {
          tags = await Tag.findAll({
            include: [{
              model: User,
              attributes: [ "id" ],
            }],
            where: {
              kind: req.query.kind
            },
          })
        } else {
          tags = await Tag.findAll({
            include: [{
              model: User,
              attributes: [ "id" ],
            }],
          })
        }

        res.json(tags)
      } catch(error) {
        res.status(422)
        res.json({
          "error": `There was a problem adding the information to the database: ${error}`
        })
      }
    },

    async create(req, res) {
      try {
        const tag = await Tag.create(params(req))
        res.send(tag)
      } catch(error) {
        res.status(422).json({"error": error })
      }
    },

    async update(req, res) {
      try {
        const tag = await Tag.create(params(req))
        res.send(tag)
      } catch(error) {
        res.status(422)
        res.json({"error": error })
      }
    },

    async destroy(req, res) {
      try {
        const tag = await Tag.findById(req.params.id)
        await tag.destroy()
        res.status(204).json({ "message": "ok" })
      } catch(error) {
        res.status(422).json({"error": error })
      }
    },

  }

  return resource
}
