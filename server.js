var express = require('express');
var bodyParser = require('body-parser');
// var items = require('../database-mongo');

var app = express();
app.use(bodyParser.json());


app.use(express.static(__dirname));

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), ()=> {
  console.log(`Server listening on port ${app.get('port')}...`)
})

// app.listen(3000, function() {
//   console.log('listening on port 3000!');
// });



// const http = require('http');
// const express = require('express');
// const app = express();

// app.use(express.static('public'));
// app.set('port', process.env.PORT || 3000);

// const server = http.createServer(app);
// server.listen(app.get('port'), () => {
//   console.log(`Server listening on port ${app.get('port')}...`);
// });

