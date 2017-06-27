const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan-body');
const cors = require('cors');

// NOTE: This file is to define routes only
//       any middleware needs to be written in its own module
//       and required here. Example as follows:
// const middleWare = require('./middleware');
// app.get('/endpoint', middleware.methodName);

const PORT = process.env.PORT || 1337;

const app = express();

app.use(bodyParser.json());
morgan(app);

app.options('*', cors());

app.use(express.static(path.join(__dirname, './../client/dist')));

/* eslint-disable no-console */
app.listen(PORT, () =>
  console.log(`GlassCamp server listening on port ${PORT}`));
/* eslint-enable no-console */
