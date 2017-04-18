import { pick } from 'lodash'
// import { parseGroup } from "api/services/vk"

const params = function(req) {
  return pick(req.body, [
  	'url',
  ])
}

export default (context) => {

  const Group = context.models.Group

  const resource = {

    async index(req, res, next) {
      try {
        const groups = await Group.findAll()
        res.json(groups)
      } catch(error) {
        res.status(422)
        res.json({
          "error": `There was a problem adding the information to the database: ${error}`
        })
      }
    },

    async create(req, res) {

      try {
        const group = await parseGroup(req.body.url)
        group.addTag(req.body.tag_id)
        res.send(group)
      } catch(error) {
        res.status(422).json({"error": error })
      }
    },

    async update(req, res) {
      try {
        const group = await Group.update(params(req))
        res.send(group)
      } catch(error) {
        res.status(422)
        res.json({"error": error })
      }
    },

    async destroy(req, res) {
      try {
        const group = await Group.findById(req.params.id)
        await group.destroy()
        res.status(204).json({ "message": "ok" })
      } catch(error) {
        res.status(422).json({"error": error })
      }
    },

  }

  return resource
}
