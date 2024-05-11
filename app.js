var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const bcrypt = require('bcrypt');

var app = express();
const port = 3000;


const { UserController } = require('./controllers/userController.js');
const { DBManager } = require('./controllers/DBManager.js');
const { User } = require('./classes/user.js');
const { Message } = require('./classes/message.js');
const { Customer } = require('./classes/customer.js');
const { Payment } = require('./classes/payment.js');
const { ParkingLot } = require('./classes/parkingLot.js');

var userController = new UserController();

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

//functions
//-----------------------------------------------------------//

async function newUser(){
  var password = 'password123';
  var encryptedPassword = userController.encrypt(password);
  var guess = 'password123';
  userController.newCustomer("email@email.com","usernamer","password123","01273557132");
}




//===========================================================//
// Main

newUser();



//var temp = userController.compare(guess, encryptedPassword)

// async function hashPassword(password, password2) { // updated
//   const salt = await bcrypt.genSalt(10)
//   const hash = await bcrypt.hash(password, salt)
//   const isSame = await bcrypt.compare(password2, hash) // updated
//   console.log(isSame) // updated
// }

//hashPassword('1234','1234');


// console.log(DBManager.getTestNum());
// userController.connectionTest();
// console.log(DBManager.getTestNum());


//console.log(DBManager.customerMapSize());
let test = DBManager.checkCustomerAccountExists("email@email.com");

var sam = new Customer("sam@gmail","SAM","fartword","3432432");
var bobb = new Customer("bobb@gmail","bobby123","fartword","3432432");
var Lot1 = new ParkingLot("")

var messages1 = new Message(sam,bobb);
console.log(messages1);
//messages1.sendMessage("fart123123");
//console.log(messages1);
//messages1.writeToFile();

Lot1.ChangePricePerHour(5);
sam.SetBal(100);
var newPayment = new Payment(sam,Lot1);
newPayment.makePayment(2);




























module.exports = app;

//Notes

//  Dont know what module.exports.app is could someone please
//  explain it - Matt