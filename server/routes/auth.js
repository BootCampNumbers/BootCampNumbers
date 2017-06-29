const db = require('../../database/index.js');
const router = require('express').Router();

// router.get('/api/auth/github',
//   passport.authenticate('github', { scope: ['user:email'] }),
//   function(req, res) {});

router.get('/auth/github/callback', (req, res, next) => {
  const options = {
    firstName: 'Kristy',
    lastName: 'Azad', 
    email: 'kristyazad@gmail.com' 
  };
  db.users.setUser(options, user => {
    console.log('Server addUser', user);
    res.send(user);
  });
});

module.exports = router;
