require('../passportconfig.js');
const db = require('../../database/index.js').users;
const passport = require('passport');
const router = require('express').Router();
const path = require('path');

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.sendFile(path.join(__dirname, '/../../client/dist/login.html'));
  }
}

router.get('/', ensureAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, '/../../client/dist/index.html'));
});


router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.get('/auth/github', passport.authenticate('github'));

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

module.exports.router = router;
module.exports.ensureAuthenticated = ensureAuthenticated;
