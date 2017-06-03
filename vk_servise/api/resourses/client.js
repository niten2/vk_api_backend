import { Client } from "api/models"
import createQuery from "api/services/createQuery"

const resource = {

  async index(req, res, next) {
    try {
      let clients = await Client.findAll(createQuery(req))
      res.json(clients)
    } catch(error) {
      res.json({ "error": error }).status(422)
    }
  },

  async show(req, res) {
    // try {
    //   let user = await Client.findById(req.params.id)
    //   res.send(user)
    // } catch(error) {
    //   res.status(422).json({"error": error })
    // }
  },

  async create(req, res) {
    // try {
    //   let user = await parseUser(req.body.url)
    //   user.addTag(req.body.tag_id)
    //   res.send(user)
    // } catch(error) {
    //   res.status(422).json({"error": error })
    // }
  },

  async update(req, res) {
    // try {
    //   let user = await User.findById(req.params.id)
    //   await user.update(params(req))
    //   res.send(user)
    // } catch(error) {
    //   res.status(422)
    //   res.json({"error": error })
    // }
  },

  async destroy(req, res) {
    // try {
    //   const user = await User.findById(req.params.id)
    //   await user.destroy()
    //   res.status(204).json({ "message": "ok" })
    // } catch(error) {
    //   res.status(422).json({"error": error })
    // }
  },

}

export default resource
