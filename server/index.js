const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const morgan = require('morgan-body');
const GitHubStrategy = require('passport-github2').Strategy;
// const db = require('../database/connection');

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
  callbackURL: `http://127.0.0.1:${process.env.PORT}'/auth/github/callback` || 'http://127.0.0.1:1337/auth/github/callback'
},

  (accessToken, refreshToken, profile, done) => {
    const fullName = profile.displayName.split(' ');
    const first = fullName[0];
    const last = fullName[1];
    const userObj = {
      githubId: profile.id,
      // email: profile._json.email,
      firstName: first,
      lastName: last
    };

    console.log('accessToken', accessToken);
    console.log(userObj);

    done();
    // Users.findOrCreate(userObj, function(err, user) {
    //   return done(err, user);
    // });

    // Users.findOrCreate({ githubId: profile.id }, function(err, user) {
    //   return done(err, user);
    // });
  }
));

app.get('/auth/github',
  passport.authenticate('github', { scope: ['user:email'] }));


app.get('/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  (req, res) => {
    // res.redirect('https://www.google.com/');
    console.log('something');
    res.redirect('/');
  }
);

app.get('/browse', (req, res) => {
  res.send('hi');
});

app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

/* eslint-disable no-console */
app.listen(PORT, () =>
  console.log(`GlassCamp server listening on port ${PORT}`));
/* eslint-enable no-console */
