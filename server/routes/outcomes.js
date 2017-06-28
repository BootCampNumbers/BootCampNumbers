const db = require('../../database/index.js');

const router = require('express').Router();

router.get('/', (req, res, next) => {
  // const options = {
  //   bootcamp : req.query.bootcamp,
  //   campus : req.query.campus
  // };
  // db.getOutcomes(options);
  // console.log('hello')
  next();
});

router.get('/bootcamp:bootcamp/campus:campus', (req, res) => {
  const options = {
    bootcamp: `${req.params.bootcamp.split('-')[0].slice(1).charAt(0).toUpperCase()}${req.params.bootcamp.split('-')[0].slice(2)} ${req.params.bootcamp.split('-')[1].charAt(0).toUpperCase()}${req.params.bootcamp.split('-')[1].slice(1)}`,
    campus: `${req.params.campus.split('-')[0].slice(1).charAt(0).toUpperCase()}${req.params.campus.split('-')[0].slice(2)} ${req.params.campus.split('-')[1].charAt(0).toUpperCase()}${req.params.campus.split('-')[1].slice(1)}`,
  };

  db.outcomes.getOutcomes(options, (results) => {
    res.send(results);
  });
  // res.send(options)
  // next();
});

router.get('/campus/:campus', (req, res, next) => {
  // db.getOutcomes({ bootcamp : req.params.city});
  next();
});

router.get('/company/:company', (req, res, next) => {
  // db.getOutcomes({ bootcamp : req.params.company});
  next();
});

// router.post('/api/outcomes', (req, res, next) => {
// });

module.exports = router;

