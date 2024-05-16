const {ParkingLot} = require('./parkingLot.js');
const { User } = require('./user.js');
const { Customer } = require('./customer.js');

class Payment{
    #customerToPay="";
    #lot="";
    constructor(customer,lot){
        
        this.customerToPay = customer;
        this.lot = lot;
        
    }

    SetPrice(hours){
        return(hours * this.lot.GetPricePerHour());
    }

    makePayment(hours){
        const price = this.SetPrice(hours);
        this.customerToPay.SetBal(this.customerToPay.GetBal() - price);
        this.lot.AddEarnings(price);
        console.log(this.customerToPay.GetBal(), "asdasd");
        

    }



}

 
module.exports = {Payment};