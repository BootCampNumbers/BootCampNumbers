require('../passportconfig.js');
const db = require('../../database/index.js').users;
const passport = require('passport');
const router = require('express').Router();
const path = require('path');

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  }
  // const loginhtml = `<div>
  //   <h1>Welcome to Glasscamp</h1>
  //   <div><a href='/auth/github'>Login with Github</a><div>
  // </div>`;
  // res.send(loginhtml);
  res.sendFile(path.join(__dirname, '/../../client/dist/Login.html'));
}

router.get('/', ensureAuthenticated, (req, res) => {
  // const indexhtml = `<div>
  //   <h1>Google, Software Engineer, $105k</h1>
  //   <div><a href='/logout'>Logout</a><div>
  // </div>`;
  // res.send(indexhtml);
  res.sendFile(path.join(__dirname, '/../../client/dist/index.html'));
  // res.redirect('/');
});


// logout
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// we will call this to start the GitHub Login process
router.get('/auth/github', passport.authenticate('github'));

// GitHub will call this URL
router.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/' }),
  (req, res) => {
    const options = {
      firstName: req.user.id,
      lastName: req.user.id,
      github: req.user.username
    };
    db(options, user => user);
    res.redirect(`/?user=${req.user.username}`);
  }
);

module.exports.ensureAuthenticated = ensureAuthenticated;
module.exports.router = router;
