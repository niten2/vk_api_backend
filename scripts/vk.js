// // node --require ./babelhook.js ./scripts/vk.js
// require('dotenv').config()

// // console.log(process.env.VK_APP_ID)

// import VK from 'vksdk'

// var vk = new VK({
//    'appId'     : process.env.VK_APP_ID,
//    'appSecret' : process.env.VK_APP_SECRET,
//    'language'  : 'ru'
// })

// vk.setToken(process.env.VK_TOKEN)

// vk.request('users.get', {'user_id' : 2333}, function(o) {
//     console.log(o)
// })


// // console.log(vk)

// // // Setup server access token for server API methods
// // vk.on('serverTokenReady', function(o) {
// //     console.log(o)
// //     vk.setToken(o.access_token)
// // })

// // // Turn on requests with access tokens
// // vk.setSecureRequests(true)

// // // Request server API method
// // vk.request('secure.getSMSHistory', {}, function(_dd) {
// //     console.log(_dd)
// // })

// // First you have to pass access_token from client side JS code

// // vk.setToken(access_token)

// // // Request 'users.get' method
