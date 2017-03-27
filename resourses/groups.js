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




  }

  return resource
}
