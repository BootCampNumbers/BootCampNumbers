const promise = require('bluebird');

const options = {
  promiseLib: promise
};


  // username: 'kennethso',
  // host: 'localhost',
  // database: 'campoverde'


const pgp = require('pg-promise')(options);

// TBD: Need to set correct config parameters

// const db = pgp('postgres://username:password@host:port/database');
module.exports.db = pgp('postgres://sheydarezaei:password@localhost/campoverde');
// console.log("PGP", typeof module.exports.db.query);
