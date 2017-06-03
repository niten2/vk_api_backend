import passport from "passport"
import InstagramStrategy from "passport-instagram"
import settings from "config/settings"

const options = {
  clientID: settings.insta_client_id,
  clientSecret: settings.insta_client_secret,
  callbackURL: settings.insta_callback_url,
}

const callback = (accessToken, refreshToken, profile, done) => {
  process.nextTick(function () {
    return done(null, profile, accessToken)
  })
}

passport.serializeUser(function(user, done) {
  done(null, user)
})

passport.deserializeUser(function(obj, done) {
  done(null, obj)
})

passport.use(new InstagramStrategy(options, callback))

export default passport
