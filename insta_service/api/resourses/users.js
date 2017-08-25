import ig from "config/initialize/instagram"

export default (context) => {

  const resource = {

    async index(req, res, next) {
      try {
        res.json({test: 3333})
      } catch(error) {
        console.log(error)
        res.json({ "error": error }).status(422)
      }
    },

  }

  return resource
}
