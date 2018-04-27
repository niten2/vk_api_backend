// import { pick } from 'lodash'
// import { parseGroup } from "api/services/vk"
// import createQuery from "api/services/createQuery"

// import { Group } from "api/models"

// const params = (req) => {
//   return pick(req.body, [
//   	'url',
//   ])
// }

// const resource = {

//   async index(req, res, next) {
//     try {
//       const groups = await Group.findAll(createQuery(req))
//       res.json(groups)
//     } catch(error) {
//       res.json({ "error": error }).status(422)
//     }
//   },

//   async create(req, res) {
//     try {
//       let urls = req.body.url.split("\n")
//       let groups = await Group.createByUrls(urls, req.body.tag_id)
//       res.send(groups)
//     } catch(error) {
//       res.json({"error": `${error.name}, ${error.message}` }).status(422)
//     }
//   },

//   async update(req, res) {
//     try {
//       const group = await Group.update(params(req))
//       res.send(group)
//     } catch(error) {
//       res.json({"error": error }).status(422)
//     }
//   },

//   async destroy(req, res) {
//     try {
//       const group = await Group.findById(req.params.id)
//       await group.destroy()
//       res.json({ "message": "ok" }).status(204)
//     } catch(error) {
//       res.json({"error": error }).status(422)
//     }
//   },

// }

// export default (context) => {
//   return resource
// }
