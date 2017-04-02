// var JwtStrategy = require('passport-jwt').Strategy
// var ExtractJwt = require('passport-jwt').ExtractJwt
// var passport = require('passport')
// var GoogleStrategy = require('passport-google-oauth20').Strategy;

// var opts = {}

// opts.jwtFromRequest = ExtractJwt.fromAuthHeader()
// opts.secretOrKey = 'secret'
// opts.issuer = "accounts.examplesoft.com"
// opts.audience = "yoursite.net"

// export default (ctx) => (
//   () => {
//     passport.use(
//       new GoogleStrategy({
//         clientID: process.env.GOOGLE_CLIENT_ID,
//         clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//         callbackURL: "http://localhost:4000/auth/google/callback",
//       },
//      function(identifier, profile, done) {
//         // asynchronous verification, for effect...
//         process.nextTick(function () {

//           // To keep the example simple, the user's Google profile is returned to
//           // represent the logged-in user.  In a typical application, you would want
//           // to associate the Google account with a user record in your database,
//           // and return that user instead.
//           profile.identifier = identifier;
//           return done(null, profile);
//         });
//      }


//       // async function(accessToken, refreshToken, profile, cb) {
//       //   // console.log(accessToken, refreshToken, profile, cb)

//       //   // console.log(profile["displayName"])
//       //   // console.log(profile["emails"][0]["value"])
//       //   const User = ctx.models.User

//       //   let name = profile["displayName"]
//       //   let email = profile["emails"][0]["value"]
//       //   let googleId = profile["id"]

//       //   let user = await User.findOne({ 'email': email })

//       //   if (user) {
//       //     // console.log(111)
//       //   } else {
//       //     user = await User.createObject({ "email": email, "name": name, "googleId": googleId  })
//       //   }

//       //   return cb(user)

//       //   // User.findOne({ 'name.last': 'Ghost' }


//       //   // const user = await User.findOne({ 'email': 'test@test.com' })

//       //   // const models = await User.find({}).sort({ create_at: -1 })
//       //   // let user =

//       //   // console.log(user)
//       //   // return cb(null, user)
//       //   // return cb(null, null)
//       //     // return cb(err, user)
//       //   // })


//       //   // User.findOrCreate({ googleId: profile.id }, function (err, user) {
//       //   //   return cb(err, user)
//       //   // })
//       // }
//     // ))

//     // passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
//     //   User.findOne({id: jwt_payload.sub}, function(err, user) {
//     //     if (err) {
//     //         return done(err, false);
//     //     }
//     //     if (user) {
//     //         done(null, user);
//     //     } else {
//     //         done(null, false)
//     //     }
//     //   })
//     // }))

//     return passport
//   }
// )
