const {parkingLot} = require('./parkingLot.js');
const { User } = require('./user.js');
const { Customer } = require('./customer.js');

class Payment{
    #customerToPay="";
    #lot="";
    constructor(customer,lot1){
        
        this.customerToPay = customer;
        this.lot = lot1;
        
    }

    SetPrice(hours){
        return(hours * this.lot.GetPricePerHour());
    }

    makePayment(hours){
        this.customerToPay.SetBal(this.customerToPay.GetBal() - this.SetPrice(hours));
        console.log(this.customerToPay.GetBal(), "asdasd");
        

    }



}

 
module.exports = {Payment};