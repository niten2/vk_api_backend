import { pick } from 'lodash'
import { parseUser } from "api/services/vk"
import { User, Tag, ItemTag } from "api/models"

const params = function(req) {
  return pick(req.body, [
  	'url',
  	'status',
  ])
}

const createQuery = function(req, models = {}) {
  let query = { include: [] }
  let tag_id = req.query.tag_id || null
  let filter = req.query.filter || []
  // let Tag = models.tag

  if (tag_id) {
    query.include.push({
      model: Tag,
      where: { id: tag_id },
    })
  }

  filter.map(attr => {
    query["where"] = { status: attr }
  })

  if (req.query.include == "tag") {
    query.include.push({
      model: Tag,
    })
  }

  return query
}

export default (context) => {
  // const User = context.models.User
  // const Tag = context.models.Tag
  // const ItemTag = context.models.ItemTag

  const resource = {

    async index(req, res, next) {
      try {
        let users = await User.findAll(createQuery(req, { tag: Tag }))
        res.json(users)
      } catch(error) {
        res.status(422)
        res.json({
          "error": `There was a problem adding the information to the database: ${error}`
        })
      }
    },

    async show(req, res) {
      try {
        let user = await User.findById(req.params.id)
        res.send(user)
      } catch(error) {
        res.status(422).json({"error": error })
      }
    },

    async create(req, res) {
      try {
        let user = await parseUser(req.body.url)
        user.addTag(req.body.tag_id)
        res.send(user)
      } catch(error) {
        res.status(422).json({"error": error })
      }
    },

    async update(req, res) {
      try {
        let user = await User.findById(req.params.id)
        await user.update(params(req))
        res.send(user)
      } catch(error) {
        res.status(422)
        res.json({"error": error })
      }
    },

    async destroy(req, res) {
      try {
        const user = await User.findById(req.params.id)
        await user.destroy()
        res.status(204).json({ "message": "ok" })
      } catch(error) {
        res.status(422).json({"error": error })
      }
    },

  }

  return resource
}
