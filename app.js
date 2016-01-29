var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var signin = require('./routes/signin');
var signup = require('./routes/signup');
var dashboard = require('./routes/dashboard');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));

app.use('/', routes);
app.use('/signin', signin);
app.use('/signup', signup);
app.use('/dashboard', dashboard);

app.listen(3000, function () {
   console.log('Example app listening on port 3000!');
});

module.exports = app;
