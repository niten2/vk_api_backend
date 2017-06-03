import { pick } from 'lodash'
import { parseGroup } from "api/services/vk"
import { createQuery } from "api/services"

import { Group } from "api/models"

const params = (req) => {
  return pick(req.body, [
  	'url',
  ])
}

const resource = {

  async index(req, res, next) {
    try {

      // console.log(1111)
      // console.log(req)
      // console.log(createQuery(req))
      // console.log(1111)

      const groups = await Group.findAll()
      res.json(groups)
    } catch(error) {
      res.json({
        "error": `${error}`
      }).status(422)
    }
  },

  async create(req, res) {

    try {
      let urls = req.body.url.split("\n")
      let groups = await Group.createByUrls(urls, req.body.tag_id)
      res.send(groups)
    } catch(error) {
      res.status(422).json({"error": `${error.name}, ${error.message}` })
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

export default (context) => {
  return resource
}
