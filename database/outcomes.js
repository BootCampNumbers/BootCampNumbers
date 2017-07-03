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

/*
function setCampus(campusName) {
  return db.query('SELECT * from campuses WHERE campuses.name = $1', [campusName])
    .then((result) => {
      if (!result.length) {
        return db.query(
          `INSERT INTO campuses(id, name, created_at, updated_at) VALUES
          (DEFAULT, $1, '2017-06-26 15:36:38', '2017-06-26 15:36:38' )
          `, [campusName]);
      }
      return result;
    });
}
*/
/*
function setBootcamp(bootcampName, campusName) {
  return db.query(`INSERT INTO bootcamps(id, name, campus_id, created_at, updated_at) VALUES
    (DEFAULT, $1,
    (SELECT id from campuses WHERE campuses.name = $2),
    '2017-06-26 15:36:38', '2017-06-26 15:36:38') RETURNING id
  `, [bootcampName, campusName]);
}
*/
/*
const sampleOffer = {
  email: 'anastasia.parilla@gmail.com',
  bootcampName: 'Hack Reactor',
  campusName: 'San Francisco',
  company: 'Google',
  salary: 126000,
  position: 'Sofware Engineer',
  taken: false
};
*/
function setOffer(options) {
  return db.query(`INSERT INTO offers
    (id, salary, position, taken, company_id, outcome_id, created_at, updated_at) VALUES
    (DEFAULT, $1,  $2, $3,
    (SELECT id from companies WHERE companies.name = $4),

    (SELECT id from outcomes WHERE

    outcomes.user_id = 
    (SELECT id from users WHERE users.email = $7) 

    AND 

    outcomes.bootcamp_id =
    (SELECT bootcamps.id from bootcamps 

      WHERE 
      bootcamps.name = $5 AND
      bootcamps.campus_id =
     (SELECT id from campuses WHERE campuses.name = $6)

    )),
    current_timestamp, current_timestamp)`,
    [options.salary, options.position, options.taken,
      options.company, options.bootcampName, options.campusName, options.email]);
}
/*
const sampleOutcome = {
  email: 'sheydarezaee@gmail.com',
  bootcamp: 'Hack Reactor',
  campus: 'Chicago',
  applicationSent: 98,
  year: 2016,
  monthsToHire: 3
  // and then invoke set offers
};
function setOutcome(options) {
  return db.query(
    `INSERT INTO outcomes
    (id, applications_sent, year, months_to_hire, user_id,
    bootcamp_id, created_at, updated_at) VALUES
    (DEFAULT, $1, $2, $3,
    (SELECT id from users WHERE users.email = $4),
    (SELECT id from bootcamps WHERE bootcamps.name = $5),
    '2017-06-26 15:36:38', '2017-06-26 15:36:38')
  `, [options.applicationSent, options.year,
    options.monthsToHire, options.email, options.bootcamp]);
}
*/

// setOffer(sampleOffer);
// setCampus('Chicago');
// setBootcamp('App Academy', 'San Francisco');
// setOutcome(sampleOutcome);

module.exports = {
  getCompanyByOffer,
  getOffers,
  getOutcomes,
  setOffer
};
