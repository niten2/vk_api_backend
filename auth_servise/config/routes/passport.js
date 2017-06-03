import { AsyncRouter } from 'express-async-router'
import passportInstagram from 'api/services/passport/instagramm'
import { Instagram } from "api/resourses"

console.log(Instagram)

export default (ctx) => {

  const api = AsyncRouter()

  // api.get('/auth/google', ctx.passport.authenticate('google', { scope: 'profile email' }))

  // api.get('/auth/google/callback', ctx.passport.authenticate(
  //   'google',

  //   { failureRedirect: '/login' },

  //   function(req, res) {
  //     return res.redirect('/');
  //   }),
  // )


  api.get('/instagram',
    passportInstagram.authenticate('instagram'), (req, res) => {
      // console.log("route")
      // res.json({
      //   req: req,
      // })
    }
  )

  api.get(
    '/instagram/callback',
    passportInstagram.authenticate('instagram', { failureRedirect: '/login' }),
    Instagram.index,
  )



	return api
}

  // api.get('/auth/google', ctx.passport.authenticate('google', { scope: 'profile email' }))



