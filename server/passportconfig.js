const passport = require('passport');
const GithubStrategy = require('passport-github2').Strategy;

module.exports = passport.use(new GithubStrategy({
  clientID: 'f0e6736a66174754555f',
  clientSecret: '468940d22b14d7f6a9cd288cbbf047fba87945f6',
  callbackURL: 'http://localhost:1337/auth/github/callback'
}
, (accessToken, refreshToken, profile, done) => done(null, profile)
));

// var session = require('express-session');
// app.use(session({secret: "enter custom sessions secret here"}));
// app.use(passport.initialize());
// app.use(passport.session());

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
