const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const morgan = require('morgan-body');
const GitHubStrategy = require('passport-github2').Strategy;

const outcomes = require('./routes/outcomes');

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

passport.use(new GitHubStrategy({
  clientID: '44a184746a6deb0596da',
  clientSecret: 'f26b3b0b9cee59afdc0e486e4fc4757fc4deb15d',
  callbackURL: 'https://glasscamp-production.herokuapp.com/register'
},
  (accessToken, refreshToken, profile, cb) => {
    console.log('profile', profile);
    console.log('accessToken', accessToken);
    cb(null);
    // Users.findOrCreate({ githubId: profile.id }, function (err, user) {
    //   return cb(err, user);
  }
));
app.get('/auth',
  passport.authenticate('github', { scope: ['user:email'] }),
  (req, res) => {
    console.log('/auth');
    // Successful authentication, redirect home.
    res.redirect('/');
  }
);

app.get('/register', (req, res) => {
  console.log(req.body);
  res.send('cool');
  // console.log('clicked');
});

/* eslint-disable no-console */
app.listen(PORT, () =>
  console.log(`GlassCamp server listening on port ${PORT}`));
/* eslint-enable no-console */
