import { Client } from "api/models"

export default {

    async index(req, res, next) {
      console.log(1111)
      try {
        // console.log(Client)
        let clients = await Client.findAll()
        res.json(clients)
      } catch(error) {
        res.json({ "error": error }).status(422)
      }
    },

}
