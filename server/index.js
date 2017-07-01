const express = require('express');
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan-body');
const cors = require('cors');
const passport = require('passport');
const ensureAuthenticated = require('./routes/auth.js').ensureAuthenticated;

const outcomes = require('./routes/outcomes.js');
const auth = require('./routes/auth.js').router;
// const users = require('./routes/users.js');
// const bootcamps = require('./routes/bootcamps.js');

const PORT = process.env.PORT || 1337;
const app = express();

morgan(app);

app.use(bodyParser.json());

app.use('*', cors());

app.use(session({ secret: 'ENTER CUSTOM SESSIONS SECRET (OPTIONAL)' }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', auth);
app.use('/api/outcomes', ensureAuthenticated, outcomes);

app.use(express.static(path.join(__dirname, './../client/dist')));

/* eslint-disable no-console */
app.listen(PORT, () =>
  console.log(`GlassCamp server listening on port ${PORT}`));
/* eslint-enable no-console */
