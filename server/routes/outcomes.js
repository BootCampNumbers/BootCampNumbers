// const db = require('../../database/index.js');
const router = require('express').Router();

router.get('/', (req, res, next) => {
  // console.log('Router GET to homepage works');
  // const options = {
  //   bootcamp : req.query.bootcamp,
  //   campus : req.query.campus
  // };
  // db.getOutcomes(options);
  next();
});

router.get('/api/outcomes/bootcamp/:name', (req, res, next) => {
  res.send('Router GET to /api/outcomes/bootcamp/:name works');
  // db.getOutcomes({ bootcamp : req.params.name});
  next();
});

router.get('/api/outcomes/city/:city', (req, res, next) => {
  console.log('Router GET to /api/outcomes/city/:city works');
  // db.getOutcomes({ bootcamp : req.params.city});
  next();
});

router.get('/api/outcomes/company/:company', (req, res, next) => {
  console.log('Router GET to /api/outcomes/company/:company works');
  // db.getOutcomes({ bootcamp : req.params.company});
  next();
});

// router.post('/api/outcomes', (req, res, next) => {
// });

module.exports = router;

