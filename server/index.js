const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan-body');
const cors = require('cors');

// const passport = require('passport');
// const GitHubStrategy = require('passport-github2').Strategy;

const outcomes = require('./routes/outcomes.js');

// const auth = require('./routes/auth.js');


// const users = require('./routes/users.js');
// const bootcamps = require('./routes/bootcamps.js');

// NOTE: This file is to define routes only
//       any middleware needs to be written in its own module
//       and required here. Example as follows:
// const middleWare = require('./middleware');
// app.get('/endpoint', middleware.methodName);

const PORT = process.env.PORT || 1337;

const app = express();

morgan(app);

app.use(bodyParser.json());

app.use('*', cors());

// app.use('/api/auth', auth);
// app.use(passport.initialize());
// app.use(passport.session());

app.use('/api/outcomes', outcomes);

app.use(express.static(path.join(__dirname, './../client/dist')));

/* eslint-disable no-console */
app.listen(PORT, () =>
  console.log(`GlassCamp server listening on port ${PORT}`));
/* eslint-enable no-console */
