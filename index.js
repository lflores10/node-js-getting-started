var createError = require('http-errors');
const express = require('express')
const path = require('path')

var api = require('./routes/index');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.all('*', (req, res, next) => {
  if (!req.get('Origin')) return next();
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', ' GET, POST, PATCH, PUT, DELETE, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
  res.set('Content-type', 'application/json');
  if ('OPTIONS' == req.method) return res.send(200);
  next();
});

app.use('/api', api);

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;