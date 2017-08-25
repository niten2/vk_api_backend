import {
  runlikeLenta,
  runFollowExplore,
} from "api/services/web_drives"

export default {

  async follow_explore(req, res, next) {
    try {
      let have_quit = req.query.quit == "true" ? true : false
      runFollowExplore({ quit: have_quit })
      res.json({ message: "run driver" })
    } catch(error) {
      res.json({ "error": error }).status(422)
    }
  },

  async like_lenta(req, res, next) {
    try {
      let have_quit = req.query.quit == "true" ? true : false
      runlikeLenta({ quit: have_quit })
      res.json({ message: "run driver" })
    } catch(error) {
      res.json({ "error": error }).status(422)
    }
  },

}
