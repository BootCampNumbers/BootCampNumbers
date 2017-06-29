const db = require('../../database/index.js');
const router = require('express').Router();

router.get('/', (req, res) => {
  db.outcomes.getOutcomes({
    bootcamp: req.query.bootcamp,
    campus: req.query.campus
  }, (results) => {
    res.status(200).send(results);
  });
});

router.get('/campus/:campus', (req, res, next) => {
  // db.getOutcomes({ bootcamp : req.params.city});
  next();
});

router.get('/company/:company', (req, res, next) => {
  // db.getOutcomes({ bootcamp : req.params.company});
  next();
});

module.exports = router;

