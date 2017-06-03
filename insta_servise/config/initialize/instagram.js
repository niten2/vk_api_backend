import Instagram from 'instagram-node'
import settings from 'config/settings'
// import axios from 'axios'

let ig = Instagram.instagram()

ig.use({ access_token: settings.insta_access_token })

// console.log(settings.insta_access_token)

ig.use({
  client_id: settings.insta_client_id,
  client_secret: settings.insta_client_secret,
})


// console.log(ig)

export default ig


// var http = require('http');
// var express = require('express');
// var api = require('instagram-node').instagram();
// var app = express();


// var redirect_uri = 'http://yoursite.com/handleauth';

// authorize_user = function(req, res) {
//   res.redirect(api.get_authorization_url(redirect_uri, { scope: ['likes'], state: 'a state' }));
// };

// handleauth = function(req, res) {
//   api.authorize_user(req.query.code, redirect_uri, function(err, result) {
//     if (err) {
//       console.log(err.body);
//       res.send("Didn't work");
//     } else {
//       console.log('Yay! Access token is ' + result.access_token);
//       res.send('You made it!!');
//     }
//   });
// };

// // This is where you would initially send users to authorize
// app.get('/authorize_user', exports.authorize_user);
// // This is your redirect URI
// app.get('/handleauth', exports.handleauth);

// http.createServer(app).listen(app.get('port'), function(){
//   console.log("Express server listening on port " + app.get('port'));
// });


































// // ig.user('user_id').then(response => {

// //   console.log(111)

// // })



// // let Instagram = require('instagram-node-lib')
// // import Instagram from 'instagram-node-lib'

// // Instagram.set('client_id', Settings.insta_client_id)
// // Instagram.set('client_secret', Settings.insta_client_secret)



// // const parseGroup = async (url) => {

// //   try {
// //     let z = await Instagram.subscriptions.list()
// //     console.log(z)
// //   } catch(error) {
// //     console.log(error)
// //   }

// // }

// // console.log(parseGroup())

// // let zzz = await Instagram.subscriptions.list()
// // console.log(zzz)

// // console.log(111 )

// // Instagram.tags.info({
// //   name: 'blue',
// //   complete: function(data){
// //     console.log(data);
// //   }
// // });



//   // , function(err, result, remaining, limit) {

//   // console.log(err, result, remaining, limit)
//   // console.log(111)

// // })

// // axios.get('/user?ID=12345')
// //   .then(function (response) {


// //     console.log(response);


// //   })

// //   .catch(function (error) {
// //     console.log(error);
// //   });



// // axios.post('/like/:media_id', function(req, res, next) {

// //   var ig = require('instagram-node').instagram({});

// //   ig.use({ access_token: 'YOUR_ACCESS_TOKEN' });

// //   ig.add_like(req.param('media_id'), {
// //     sign_request: {
// //       client_secret: 'YOUR_CLIENT_SECRET',
// //       // Then you can specify the request:
// //       client_req: req
// //       // or the IP on your own:
// //       ip: 'XXX.XXX.XXX.XXX'
// //     }
// //   }, function(err) {
// //     // handle err here
// //     return res.send('OK');
// //   });
// // });
// //
// // export default {}
