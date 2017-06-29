const db = require('./connection.js').db;
const promise = require('bluebird');

const options = {
  firstName: 'Jashua',
  lastName: 'Azad', 
  email: 'shayanazad@gmail.com' 
}


function setUser(options, callback) {
  return db.query('SELECT * FROM users WHERE first_name = $1 and last_name = $2', [options.firstName, options.lastName])
    .then((result) => {
      if(!result.length) {
        return db.query(
  	      `INSERT INTO
  	       users(id, email, first_name, last_name, minority, created_at, updated_at) VALUES 
  	       (DEFAULT, $1, $2, $3, TRUE, '2017-06-26 15:36:38', '2017-06-26 15:36:38') RETURNING id`,
           [options.email, options.firstName, options.lastName]
  	    )}
      }).then((user) => {
        return db.query(`SELECT * from users WHERE id = $1`, [user[0].id]);
      }).then((user) => {
        // console.log('final user', user)
        callback(user);
      })
}

// setUser(options, user => (console.log('DARABASE addUser', user)));

/*
{ githubId: '26372088',
 email: 'weschoi.creative@gmail.com',
 firstName: 'Wesley',
 lastName: 'Choi' }
*/

module.exports = {
  setUser
}






