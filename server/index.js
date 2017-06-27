const express = require('express');
const path = require('path');

const PORT = (process.env.PORT || 3000);

const app = express();

app.use(express.static(path.join(__dirname, './../client/dist')));
app.use(express.static(path.join(__dirname, './../node_modules')));

/* eslint-disable no-console */
app.listen(PORT, () =>
  console.log(`GlassCamp server listening on port ${PORT}`));
/* eslint-enable no-console */
