import vk from "api/lib/vk/vk"
import { replace } from "lodash"

import Models from "api/models"

let { User } = Models

// let test = async function (uid) {

//   console.log(vk)
//   console.log(222)

//   return await Promise.new(names.map(async function(name) {
//     var unicorn = await getUnicorn(name);
//     return unicorn;
//   }));


// }


export default (url) => {
  console.log(11122222)

  // let uid = replace(replace(url, "https://vk.com/", ""), "id", "")

  // // let object = await User.findOrCreate({
  // //   where: { uid: uid },
  // // })

  User.findById(7).then( object => {

    console.log(object)

  })

  // await test(object.uid)

  // console.log(object.id)
  // console.log(object.uid)


  // console.log(111)
  // vk.request('users.get', { 'user_id' : object.uid}, function(req) {
  //   console.log(1111)
  //   console.log(req.response)
  // })

}
