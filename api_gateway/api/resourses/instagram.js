const resource = {

  async index(req, res, next) {
    try {
      res.json({
        user: req.user,
        authInfo: req.authInfo
      })

    } catch(error) {
      res.json({ "error": error }).status(422)
    }
  },

}

export default resource
