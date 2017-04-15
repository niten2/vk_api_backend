// Setup

import VK from 'vksdk'
import Settings from 'config/settings'

let vk = new VK({
   'appId'     : Settings.vkAppId,
   'appSecret' : Settings.vkAppSecret,
   'language'  : 'ru'
})

export default vk
// Setup server access token for server API methods
// vk.on('serverTokenReady', function(req) {
  // console.log(req.access_token)
  // vk.setToken(req.access_token)
// })

// Turn on requests with access tokens
// vk.setSecureRequests(true)

// Request server API method
// vk.request('secure.getSMSHistory', {}, function(_dd) {
//   console.log(_dd)
// })

// vk.requestServerToken()

/**
 * Request client methods
 */
// First you have to pass access_token from client side JS code
// let access_token = Settings.vkToken
// vk.setToken(access_token)

// // Request 'users.get' method

// vk.request('users.get', { 'user_id' : 222}, function(req) {

//   console.log(req.response)
// })



// console.log(a)
