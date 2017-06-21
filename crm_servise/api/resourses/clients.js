import { Client } from "api/models"
import R from "ramda"

let params = (object) => {
  R.pick([
    "number",
    "name",
    "phone",
    "date_birth",
    "note",
  ], object)
}


export default {

    async index(req, res, next) {
      try {
        let clients = await Client.findAll()
        res.json(clients)
      } catch(error) {
        res.json({ "error": error }).status(422)
      }
    },

    async show(req, res) {
      try {
        let client = await Client.findById(req.params.id)
        res.send(client)
      } catch(error) {
        res.json({"error": error }).status(422)
      }
    },

    async create(req, res) {
      try {
        // console.log(1111, req.body)

        let client = await Client.create(req.body)
        res.send(client)

      } catch(error) {
        res.json({"error": error }).status(422)
      }
    },

    async update(req, res) {
      try {
        let client = await Client.findById(req.params.id)
        await client.update(params(req))
        res.send(user)
      } catch(error) {
        res.json({"error": error }).status(422)
      }
    },

    async destroy(req, res) {
      try {
        const client = await Client.findById(req.params.id)
        await client.destroy()
        res.json({ "message": "ok" }).status(204)
      } catch(error) {
        res.json({"error": error }).status(422)
      }
    },
}
