var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const calc = require('./controllers/UserController.js')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
const port = 3000;


const { UserController } = require('./controllers/UserController.js');
const { DBManager } = require('./controllers/DBManager.js');

// view engine setup
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
// Render the index Pug file
app.get('/index', (req, res) => {
  res.render('index');
});
app.get('/userHome', (req, res) => {
  res.render('userHome');
});
app.get('/admin', (req, res) => {
  res.render('admin');
});
app.get('/message', (req, res) => {
  res.render('message');
});
app.get('/signup', (req, res) => {
  res.render('signup');
});
app.get('/login', (req, res) => {
  res.render('login');
});



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// 404 error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler middleware
app.use(function(err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Determine the error status and message
  let errorStatus = err.status || 500;
  let errorMessage = 'Oops! Something went wrong.';

  // Customize error message based on status code
  if (errorStatus === 404) {
    errorMessage = 'Sorry, the page you requested could not be found.';
  } else if (errorStatus === 401) {
    errorMessage = 'Unauthorized: Access is denied due to invalid credentials.';
  } else if (errorStatus === 403) {
    errorMessage = 'Forbidden: You don\'t have permission to access this resource.';
  } else if (errorStatus === 400) {
    errorMessage = 'Bad Request: The request cannot be fulfilled due to bad syntax.';
  } // Add more conditions as needed

  // Render the error page with specific error message
  res.status(errorStatus);
  res.render('error', { 
    errorTitle: `${errorStatus}`, 
    errorMessage: errorMessage 
  });
});
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}!`);
});

//===========================================================//
// Main

var userController = new UserController();

console.log(DBManager.getTestNum());
userController.connectionTest();
console.log(DBManager.getTestNum());
module.exports = app;

//Notes

//  Dont know what module.exports.app is could someone please
//  explain it - Matt