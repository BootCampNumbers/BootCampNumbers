const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const morgan = require('morgan-body');
const GitHubStrategy = require('passport-github2').Strategy;
const db = require('../database/connection');

const outcomes = require('./routes/outcomes.js');
// const users = require('./routes/users.js');
// const bootcamps = require('./routes/bootcamps.js');

// NOTE: This file is to define routes only
//       any middleware needs to be written in its own module
//       and required here. Example as follows:
// const middleWare = require('./middleware');
// app.get('/endpoint', middleware.methodName);

const PORT = process.env.PORT || 1337;

const app = express();

app.use(bodyParser.json());
morgan(app);

app.options('*', cors());

app.use('/api/outcomes', outcomes);

app.use(express.static(path.join(__dirname, './../client/dist')));
app.use(express.static(path.join(__dirname, './../node_modules')));
app.use(passport.initialize());
app.use(passport.session());


passport.use(new GitHubStrategy({
    // clientID: '0d94cf0c6c83ca967f18',
    // clientSecret: 'ec622946fcbb7c25564249385db7adad5fba7faa',
    // callbackURL: "http://127.0.0.1:1337/auth/github/callback"
    clientID: '4f1a0e8b8d981477e7cc',
    clientSecret: '59db9cc288cdc7be07110591dd899c5a5c84a71f',
    callbackURL: "http://127.0.0.1:1337/auth/github/callback"
  },

  function(accessToken, refreshToken, profile, done) {

    var fullName = profile.displayName.split(' ');
    var first = fullName[0];
    var last = fullName[1];

    console.log('accessToken', accessToken);
    console.log('refreshToken', refreshToken);

    var userObj = {
      githubId: profile.id,
      email: profile._json.email,
      firstName: first,
      lastName: last
    };

    // Users.findOrCreate(userObj, function(err, user) {
    //   return done(err, user);
    // });

    // Users.findOrCreate({ githubId: profile.id }, function(err, user) {
    //   return done(err, user);
    // });
  }
));

// INSERT INTO Users (id, email, first_name, last_name, minority, created_at, updated_at) VALUES

// (DEFAULT, 'matthew.chong@gmail.com', 'Matthew', 'Chong', FALSE, '2017-06-26 15:36:38', '2017-06-26 15:36:38');

app.get('/auth/github',
  passport.authenticate('github', { scope: ['user:email'] }),
  function(req, res) {});


app.get('/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // res.redirect('https://www.google.com/');
    res.redirect('/');
  });




app.get('/browse', function(req, res) {
  res.send('hi');
})

app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

/* eslint-disable no-console */
app.listen(PORT, () =>
  console.log(`GlassCamp server listening on port ${PORT}`));
/* eslint-enable no-console */
