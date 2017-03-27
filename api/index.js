import { AsyncRouter } from 'express-async-router'
import Groups from './groups'
import Users from './users'
import Tags from './tags'

export default (ctx) => {
	const api = AsyncRouter()

  api.all('/', () => ({ version: 'current version v1' }) )

  api.use('/v1/users', Users(ctx))
  api.use('/v1/tags', Tags(ctx))
  api.use('/v1/groups', Groups(ctx))

	return api
}


// import Posts from './posts'
// import Comments from './comments'
// import Passport from './passport'
// api.use('/api/v1/posts', Posts(ctx))
// api.use('/api/v1/comments', Comments(ctx))
// api.use('/auth', Passport(ctx))


// // api.get('/auth/google', ctx.passport.authenticate('google', { scope: 'profile email' }))

// api.use(ctx.passport.authenticate('google', { failureRedirect: '/login' }),
//   function(req, res) {
//     res.json({"ddd":"333"})
//   }
// );


// api.get('/auth/google/callback', ctx.passport.authenticate(
//   'google',

//   { failureRedirect: '/login' },

//   function(req, res) {
//     // console.log(req, res)

//     // req.send({"ttt": "333"})

//     // console.log(2222)
//     // console.log(req, res)
//     // console.log(req)
//     // console.log(111)
//     // console.log(req, res)
//     // return null
//     // return user

//     // res.send(user)
//   }),
// )

