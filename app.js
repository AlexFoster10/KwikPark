var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
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
const { SiteController } = require('./controllers/SiteController.js');
const { Booking } = require("./classes/booking.js");
const { Space } = require('./classes/space.js');
const {day,month,year} = require("./views/booking.js");
const { MessageController } = require('./controllers/messageController.js')

var userController = new UserController();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


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
app.get('/booking', (req, res) => {
  res.render('booking');
});
app.get('/', (req, res) => {
  res.render('login')
})



app.post("/001",async function(req, res){
  console.log('Received POST request on /001');
  console.log(req.body);

  const temp = await userController.newCustomer(req.body.email, req.body.userName, req.body.password, req.body.phoneNumber);
  if(temp == true){
    res.sendStatus(200);
  }else{
    // an account with this email alredy exists
    res.sendStatus(211);
  }
 
});

// user login
app.post("/002",async function(req, res){
    console.log("incomeing login reqest======================================\n\n");
    console.log(req.body);

    const temp = await userController.loginCheck(req.body.email, req.body.password);

    switch(temp){
      case "200":
        res.sendStatus(200);
        break;
      case "210":
        res.sendStatus(210);
        break;
      case "209":
        res.sendStatus(209);
        break;
      default:
        res.sendStatus(500);
        // if its not one of the posible options we send a server error code    
    }
      
    
    
    

    

})




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


//middlewear


app.listen(port, () => {
console.log(`Server is running on port ${port}!`);
});


//new customer


//functions
//-----------------------------------------------------------//

async function newUser(){
  var password = 'password123';
  // const encryptedPassword = await userController.encrypt(password);
  // console.log(encryptedPassword);
  userController.newCustomer("email@email.com","usernamer",password,"01273557132");

}
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))



//===========================================================//
// Main

async function main(){
//newUser();
}

main();

var messageController = new MessageController();
var sam = new Customer("sam@gmail","SAM","fartword","3432432");
var bobb = new Customer("bobb@gmail","bobby123","fartword","3432432");
var mary = new Customer("mary@gmail","Mazza","fartword","3432432");
var oliver = new Customer("oliver@gmail","olly","fartword","343243223");
var Lot1 = new ParkingLot("Yellow lot");

// var messages1 = new Message(sam,bobb);
// //console.log(messages1);
// messages1.sendMessage("This is a message",sam.getUsername());

// //console.log(messages1);
// messages1.writeToFile();
// messages1.sendMessage("This is another[ adf, ] message", bobb.getUsername());
// messages1.writeToFile();
// messages1.readFromFile();



var site1 = new SiteController;
site1.addLot(Lot1);
var currentLot = site1.getParkingLot("Yellow lot");
currentLot.populate(1,10);
currentLot.getArrayStatus();
currentLot.addSpaces(0, 5);
currentLot.getArrayStatus();
currentLot.removeSpaces(0,2);
currentLot.getArrayStatus();
function makeBooking(){
  currentLot.createBooking(mary,currentLot.getSpaceFromId(5),day,month,year,1400,1600);
}

currentLot.createBooking(oliver,currentLot.getSpaceFromId(5),10,12,2005,1550,1750);
currentLot.getArrayStatus();
currentLot.getBookings();



// messageController.sendNotification("test@test.com",510, 1);


 

//Lot1.ChangePricePerHour(5);
//sam.SetBal(100);
//var newPayment = new Payment(sam,Lot1);
//newPayment.makePayment(2);




























module.exports = app;

//Notes

//  Dont know what module.exports.app is could someone please
//  explain it - Matt