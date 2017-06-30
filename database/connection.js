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
