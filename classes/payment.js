const {parkingLot} = require('./parkingLot.js');
const { User } = require('./user.js');


class Payment{
    
    static SetPrice(numOfHours,pricePerHour){
        return(numOfHours * pricePerHour);
    }

    static makePayment(){
        //take user and parkinglot related to payment and then calculate price and charge user from that

    }



}
let user1 = new User("email1", "name1", "password1", "phonenumber")
 
module.exports = {Payment, user1};