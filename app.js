// const express = require('express');
// const path = require('path');

// let app = express();

// //middleware

// //serve static client side files
// app.use(express.static('./client/dist'));

// app.get('/admin/families', (req, res) => {
//   //returns all families in db
// });

// app.get('/admin/families/:id', (req, res) => {
//   //returns all the family's members and their associated needs

// });

// app.post('/admin/families', (req, res) => {
//   console.log(req.body);
//   //add a new Family model to the DB
// });

// app.post('/admin/families/:id', (req, res) => {
//   console.log(req.body);
//   //add a new family member to this family
// });


// app.post('/admin/families/:id/needs', (req, res) => {
//   //associates a new need with that family member
//   console.log(req.body)
// });

// app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'client/dist/index.html')))

// let port = 1234;

// app.listen(1234, () => console.log('listening on port ' + port));

var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var adminRoutes = require('./routes/admin');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'client/dist')));

app.use('/', adminRoutes);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
// no stacktraces leaked to user unless in development environment
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: (app.get('env') === 'development') ? err : {}
  });
});

module.exports = app;