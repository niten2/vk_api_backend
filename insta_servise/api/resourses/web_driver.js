import { main } from "api/services/web_drives"





const resource = {

  async follow_explore(req, res, next) {
    try {
      let have_quit = req.query.quit == "true" ? true : false

      main({ quit: have_quit })

      res.json({message: "run driver"})
    } catch(error) {
      console.log(error)
      res.json({ "error": error }).status(422)
    }
  },

}


export default resource
