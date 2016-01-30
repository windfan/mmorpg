'use strict';

var express = require('express');
var app = express();

/* Serve static assest out to public */
app.use(express.static('public'));

/* Serve root path */
app.get('/', (req, res) => {
  res.sendfile('./public/index.html');
});



module.exports = app;
