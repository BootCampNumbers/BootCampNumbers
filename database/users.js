const db = require('./connection.js').db;
require('bluebird');

function setUser(options, callback) {
  return db.query('SELECT * FROM users WHERE first_name = $1 and last_name = $2', [options.firstName, options.lastName])
    .then((result) => {
      if (!result.length) {
        return db.query(`INSERT INTO users(id, email, first_name, last_name, minority, created_at, updated_at) VALUES 
        (DEFAULT, $1, $2, $3, TRUE, '2017-06-26 15:36:38', '2017-06-26 15:36:38') RETURNING id`,
        [options.github, options.firstName, options.lastName]);
      }
      return result;
    })
    .then(user => (db.query('SELECT * from users WHERE id = $1', [user[0].id]))
      ).then((user) => {
        callback(user);
      });
}


// const options = {
//   firstName: 'JKennehs',
//   lastName: 'Azfsdfds',
//   email: 'shay423444dfdfsdzad@gmail.com'
// };

// setUser(options, user => (console.log('DARABASE addUser', user)));

module.exports = setUser;
