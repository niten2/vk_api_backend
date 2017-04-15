import { pick } from 'lodash'

const params = function(req) {
  return pick(req.body, [
  	'name',
  	'url',
  ])
}

export default (context) => {

  const User = context.models.User
  const Tag = context.models.Tag
  const ItemTag = context.models.ItemTag

  const resource = {

    async index(req, res, next) {
      try {
        let users
        let tag_id = req.query.tag_id
        console.log(tag_id)

        if (tag_id) {
          users = await User.findAll({
            include: [{
              model: Tag,
              where: { id: tag_id },
            }]
          })
        } else {
          // users = await User.findAll()
          users = await User.findAll({
            include: [{
              model: Tag,
            }]
          })
        }

        res.json(users)
      } catch(error) {
        res.status(422)
        res.json({
          "error": `There was a problem adding the information to the database: ${error}`
        })
      }
    },

    async create(req, res) {
      try {
        let tag = await Tag.findById(req.body.tag_id)
        let user = await User.create(params(req))
        tag.addUser(user, { taggable: "users" })

        res.send(user)
      } catch(error) {
        res.status(422).json({"error": error })
      }
    },

    async update(req, res) {
      try {
        const user = await User.create(params(req))
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
