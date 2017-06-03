// import { pick } from 'lodash'
// import { parseUser } from "api/services/vk"
// import { User, Tag, ItemTag } from "api/models"
import ig from "config/initialize/instagram"
// console.log(Instagram)

// const params = function(req) {
//   return pick(req.body, [
//   ])
// }

export default (context) => {

  const resource = {

    async index(req, res, next) {
      try {
        // let users = await User.findAll(createQuery(req, { tag: Tag }))
        // res.json(users)


        // ig.user('user_id', function(err, result, remaining, limit) {

        //   console.log(11111)

        // })

        // ig.user_self_feed( (err, medias, pagination, remaining, limit) => {

        //   console.log(err, medias, pagination, remaining, limit)

        // });


        ig.user('1248877206', (err, result, remaining, limit) => {

          console.log(err, result, remaining, limit)

        });


        // let zz = ig.user_search('niten2niten2', (err, users, remaining, limit) => {
        //   return new Promise((resolve, reject) => {
        //     if (!err) {
        //       resolve(users, remaining, limit)
        //     } else {
        //       reject(err)
        //     }
        //   })
        // })

        // let ee = await zz

        // console.log(ee)

        // res.json(err, users).status(200)

        res.json({dsdsfsd: 3333})

      } catch(error) {
        console.log(error)
        res.json({ "error": error }).status(422)
      }
    },

    // async show(req, res) {
    //   try {
    //     let user = await User.findById(req.params.id)
    //     res.send(user)
    //   } catch(error) {
    //     res.status(422).json({"error": error })
    //   }
    // },

    // async create(req, res) {
    //   try {
    //     let user = await parseUser(req.body.url)
    //     user.addTag(req.body.tag_id)
    //     res.send(user)
    //   } catch(error) {
    //     res.status(422).json({"error": error })
    //   }
    // },

    // async update(req, res) {
    //   try {
    //     let user = await User.findById(req.params.id)
    //     await user.update(params(req))
    //     res.send(user)
    //   } catch(error) {
    //     res.status(422)
    //     res.json({"error": error })
    //   }
    // },

    // async destroy(req, res) {
    //   try {
    //     const user = await User.findById(req.params.id)
    //     await user.destroy()
    //     res.status(204).json({ "message": "ok" })
    //   } catch(error) {
    //     res.status(422).json({"error": error })
    //   }
    // },

  }

  return resource
}
