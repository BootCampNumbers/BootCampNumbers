const passport = require('passport');
const GithubStrategy = require('passport-github2').Strategy;

module.exports = passport.use(new GithubStrategy({
  clientID: 'INSERT CLIENT ID',
  clientSecret: 'INSERT CLIENT SECRET',
  callbackURL: 'INSERT CALLBACKURL'
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
