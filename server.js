'use strict';

var express = require('express');
var path = require('path');
var app = express();


// Setup View Engines
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// Serve files from your "public" directory
app.use('/public', express.static(path.join(__dirname, '/public')));
app.use('/api', express.static(path.join(__dirname, '/api')));

// Serve files from your "bower_components" directory
app.use('/bower_components', express.static(path.join(__dirname, '/bower_components')));

// GET index.html route
app.get('/', function(req, res) {
  return res.render('index');
});

// Start our server and start to listen
app.listen(process.env.PORT || 3000, function() {
  console.log('listening');
});