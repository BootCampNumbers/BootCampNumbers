const pgp = require('pg-promise')();

// TBD: Need to set correct config parameters
const config = {
  host: 'localhost',
  port: 3457,
  database: 'glassCamp',
  user: 'root',
  password: ''
};

module.exports.db = pgp(config);
