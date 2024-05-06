// var test = new Admin('email','bob','secret',43565465);
// console.log(test);

// var lot = new ParkingLot("Test");
// lot.populate(3,5);
// console.log(lot);
// lot.populate(4,5);


var bob = new Customer('testMail','Sam','pword');
console.log(bob);

bob.toggleBadge();

var myCar = new Vehicle("Test Name","LRO7 LOH","BIke")
console.log(myCar);
myCar.toggleEV();
console.log(myCar);

var admin = new Admin();
var lot = new ParkingLot("lot1");

lot.populate(1,3)
console.log(lot);

admin.checkLotStatus(lot);

