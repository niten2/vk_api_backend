// nodemon --exec node --harmony --require ./tools/babelhook api/lib/vk/vk.js

import VK from 'vk-io'
import Settings from 'config/settings'

// const vk = new VK(options)

// let vk = new VK({
//    'appId'     : Settings.vkAppId,
//    'appSecret' : Settings.vkAppSecret,
//    'language'  : 'ru'
// })

let vk = new VK({
  app: Settings.vkAppId,
  key: Settings.vkAppSecret,
  // token: Settings.vkToken,
})

// const auth = vk.auth.standalone();

// console.log(auth)

// console.log(vk)


// vk.api.wall.get({
// 	owner_id: 1,
// 	count: 5
// })
// .then((wall) => {
// 	console.log('Wall:',wall);
// })
// .catch((error) => {
// 	console.error(error);
// });


export default vk

// let test = vk.api.users.get({ user_id: 2 }).then(response => {

//   console.log(response)

// })

// console.log(test)

// let test = vk.api.users.get({ user_id: 1 })


// console.log(test)


// vk.setOptions({
//   app: Settings.vkAppId,
//   key: Settings.vkAppSecret,
// });

// const auth = vk.auth.standalone();

// auth.run()
// .then((token) => {
//     console.log('User token:',token);
// })
// .catch((error) => {
//     console.error(error);
// });


// let access_token = Settings.vkToken
// vk.setToken(access_token)


// console.log(vk)

// console.log(222)

// vk.auth.server().then((token) => {
//   console.log('Server token:', token);
// }).catch((error) => {
//   console.error(error);
// });

// vk.setToken("9cd219e29cd219e29c79381ba59c8aa76f99cd29cd219e2c427d7081ff7e92627f6b785")

// auth.run().then((account) => {
//   console.log('User:',account.user);
//   console.log('Token:',account.token);
//   console.log('Expires:',account.expires);

//   if ('email' in account) {
//       console.log('Email:',account.email);
//   }
// })
// .catch((error) => {
//     console.error(error);
// });


// vk.collect.wall.get({
//     user_id: 1
// })
// .on('data',(items) => {
//     console.log('Часть записей:',items.length);
// })
// .on('end',() => {
//     console.log('Все записи со стены получены');
// })
// .on('error',(error) => {
//     console.error(error);
// });


// const auth = vk.auth.standalone();

// auth.run()
// .then((token) => {
//     console.log('User token:',token);
// })
// .catch((error) => {
//     console.error(error);
// });

// vk.setToken(Settings.vkToken)

// vk.api.wall.get({
//   user_id: 1,
//   count: 5
// })
// .then((wall) => {
//     console.log('Wall:',wall);
// })
// .catch((error) => {
//     console.error(error);
// });


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

// // Request 'users.get' method

// vk.request('users.get', { 'user_id' : 222}, function(req) {
//   console.log(req.response)
// })



// console.log(a)
