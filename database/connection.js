const promise = require('bluebird');

const DATABASE_URL = process.env.DATABASE_URL;

const options = {
  promiseLib: promise
};

const pgp = require('pg-promise')(options);

if (!process.env.PG_NO_SSL) {
  pgp.pg.defaults.ssl = true;
}

module.exports.db = pgp(DATABASE_URL);

// const db = pgp('postgres://username:password@host:port/database');
module.exports.db = pgp('postgres://sheydarezaei:password@localhost/campoverde');
// console.log("PGP", typeof module.exports.db.query);

