// NOTE: This file is only for require statements and to export handles of methods
//       Example below
module.exports.outcomes = require('./outcomes');

const promise = require('bluebird');

const options = {
  promiseLib: promise
};

const pgp = require('pg-promise')(options);

// const db = pgp('postgres://username:password@host:port/database');
const db = pgp('postgres://kennethso:password@localhost/campoverde');


function getOutcomesByBootcamp(bootcamp, campus) {
  return db.query(`
    SELECT *
      FROM users 
        INNER JOIN outcomes 
          ON users.id = outcomes.user_id
        WHERE 
          outcomes.bootcamp_id in (SELECT bootcamps.id from bootcamps WHERE bootcamps.name = $1)`, [bootcamp, campus]);
}

function getCompanyByOffer(offer) {
  return db.query('SELECT * FROM companies WHERE id = $1', [offer.company_id]);
}

function getOffers(outcome) {
  return db.query('SELECT * FROM offers WHERE offers.outcome_id = $1', [outcome.id])
    .then((offers) => {
      const promised = offers.map((offer) => {
        const offerWithCompany = offer;
        return getCompanyByOffer(offer)
        .then((company) => {
          offerWithCompany.company = company;
          return offerWithCompany;
        });
      });
      return promise.all(promised);
    });
}


function getOutcomes(search, callback) {
  getOutcomesByBootcamp(search.bootcamp)
  .then((outcomes) => {
    const promised = outcomes.map((outcome) => {
      const outcomeWithOffers = outcome;
      return getOffers(outcome)
      .then((offers) => {
        outcomeWithOffers.offers = offers;
        return outcomeWithOffers;
      });
    });
    return promise.all(promised).then((results) => {
      callback(results);
      // console.log('OUTCOMES', results);
      // console.log('OFFERS', results[0].offers);
      // console.log('COMPANY', results[0].offers[0].company[0]);
    });
  });
}

const search = {
  bootcamp: 'Hack Reactor',
  campus: 'San Francisco'
};

getOutcomes(search);
