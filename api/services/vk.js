import VKSDK from 'vksdk'

var vk = new VKSDK({
   'appId'     : process.env.VK_APP_ID,
   'appSecret' : process.env.VK_APP_SECRET,
   'language'  : 'ru'
})
vk.setToken(process.env.VK_TOKEN)

// export default vk
// usersGet = () => {
//   console.log(1111)
// }

export async function groupUpload(options = {}) {
  let url = options.url
  let group = options.group

  console.log(url)

  // vk.request('users.get', {'user_id' : 2333}, function(o) {
  //     console.log(o)
  // })

  // await group.update({ screen_name: "test", name: "tttt" })

}

// vk.request('users.get', {'user_id' : 2333}, function(o) {
//     console.log(o)
// })


// export usersGet
