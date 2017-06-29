// const db = require('../../database/index.js');
require('../passportconfig.js');
const passport = require('passport');
const router = require('express').Router();

// Simple route middleware to ensure user is authenticated.
//  Use this route middleware on any resource that needs to be protected.  If
//  the request is authenticated (typically via a persistent login session),
//  the request will proceed.  Otherwise, the user will be redirected to the
//  login page.
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  const loginhtml = `<div>
  <h1>Welcome to GlassCamp</h1>
  <div><a href='/auth/github'>Login with Github</a></div>
  </div>`;
  return res.send(loginhtml);
}

// main menu route
router.get('/', ensureAuthenticated, (req, res) => {
  const indexhtml = `<div>
     <h1>Google, Software Engineer $105,000</h1>
     <div><a href='/logout'>Logout</a></div>
   </div>`;
  res.send(indexhtml);
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
  // console.log('user informatation', req.user);
    res.redirect('/');
  }
);


module.exports.ensureAuthenticated = ensureAuthenticated;
module.exports.router = router;
