const db = require('./connection').db;
const promise = require('bluebird');

function getOutcomesByBootcamp(bootcamp, campus) {
  if (!campus) {
    return db.query(`
    SELECT *
      FROM users 
        INNER JOIN outcomes 
          ON users.id = outcomes.user_id
        WHERE 
          outcomes.bootcamp_id in (
          SELECT bootcamps.id from bootcamps 
            WHERE bootcamps.name = $1
            )`, [bootcamp]);
  }
  return db.query(`
      SELECT *
        FROM users 
          INNER JOIN outcomes 
            ON users.id = outcomes.user_id
          WHERE 
            outcomes.bootcamp_id in (
            SELECT bootcamps.id from bootcamps 
              WHERE bootcamps.name = $1 AND bootcamps.campus_id = (SELECT id from campuses WHERE campuses.name = $2)
              )`, [bootcamp, campus]);
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
  getOutcomesByBootcamp(search.bootcamp, search.campus)
    .then((outcomes) => {
      const promised = outcomes.map((outcome) => {
        const outcomeWithOffers = outcome;
        return getOffers(outcome)
          .then((offers) => {
            outcomeWithOffers.offers = offers;
            return outcomeWithOffers;
          });
      });
      return promise.all(promised).then(results => (
        callback(results)
      ));
    });
}

module.exports = {
  getCompanyByOffer,
  getOffers,
  getOutcomes
};
