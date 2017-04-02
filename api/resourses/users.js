import { pick } from 'lodash'

const params = function(req) {
  return pick(req.body, [
  	'name',
  ])
}

export default (context) => {

  const User = context.models.User

  const resource = {

    async index(req, res, next) {
      try {
        const user = await User.findAll()
        res.json(user)
      } catch(error) {
        res.status(422)
        res.json({
          "error": `There was a problem adding the information to the database: ${error}`
        })
      }
    },

    async create(req, res) {
      try {
        const user = await User.create(params(req))
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
