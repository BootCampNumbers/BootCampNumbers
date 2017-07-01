const passport = require('passport');
const GithubStrategy = require('passport-github2').Strategy;

module.exports = passport.use(new GithubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: process.env.GITHUB_CALLBACK_URL
}
, (accessToken, refreshToken, profile, done) => done(null, profile)
));

passport.serializeUser((user, done) => {
  // placeholder for custom user serialization
  // null is for errors
  done(null, user);
});

passport.deserializeUser((user, done) => {
  // placeholder for custom user deserialization.
  // maybe you are getoing to get the user from mongo by id?
  // null is for errors
  done(null, user);
});
