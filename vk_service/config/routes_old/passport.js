import { AsyncRouter } from 'express-async-router'


export default (ctx) => {

  const api = AsyncRouter()


  // api.get('/', context.resourses.Posts.index)

  api.get('/google', ctx.passport.authenticate('google', { scope: 'profile email' }))
  // api.get("/", ctx.passport.authenticate('google', { failureRedirect: '/login' }),
  //   // function(req, res) {
  //   //   res.json({"ddd":"333"})
  //   // }
  // );

  api.get('/google/callback', ctx.passport.authenticate(
    'google',

    { failureRedirect: '/login' },

    function(req, res) {
      // console.log(req, res)

      // console.log(req, res)
      return res.redirect('/');

      // console.log(2222)
      // console.log(req, res)
      // console.log(req)
      // console.log(111)
      // console.log(req, res)
      // return null
      // return user

      // res.send(user)
    }),
  )


  // api.post('/', context.resourses.Posts.create)
  // api.get('/:id', context.resourses.Posts.show)
  // api.put('/:id', context.resourses.Posts.update)
  // api.delete('/:id', context.resourses.Posts.destroy)

	return api
}

  // api.get('/auth/google', ctx.passport.authenticate('google', { scope: 'profile email' }))



