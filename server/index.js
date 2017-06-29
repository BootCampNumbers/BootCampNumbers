const express = require('express');
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan-body');
const cors = require('cors');
const passport = require('passport');
const ensureAuthenticated = require('./routes/auth.js').ensureAuthenticated;

// NOTE: This file is to define routes only
//       any middleware needs to be written in its own module
//       and required here. Example as follows:
// const middleWare = require('./middleware');
// app.get('/endpoint', middleware.methodName);

// ROUTES
const outcomes = require('./routes/outcomes.js');
const auth = require('./routes/auth.js').router;
// const users = require('./routes/users.js');
// const bootcamps = require('./routes/bootcamps.js');

const PORT = process.env.PORT || 1337;
const app = express();

morgan(app);

app.use(bodyParser.json());

app.use('*', cors());

app.use(session({ secret: 'enter custom sessions secret here' }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', ensureAuthenticated, auth);
app.use('/api/outcomes', ensureAuthenticated, outcomes);


app.use(express.static(path.join(__dirname, './../client/dist')));


/* eslint-disable no-console */
app.listen(PORT, () =>
  console.log(`GlassCamp server listening on port ${PORT}`));
/* eslint-enable no-console */
