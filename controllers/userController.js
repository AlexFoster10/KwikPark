
const { DBManager } = require('./DBManager.js');
const { Customer } = require('../classes/Customer.js');
const { Vehicle } = require('../classes/Vehicle.js');


class UserController{
    constructor(){
        
        
    }
    //testing
    connectionTest(){
        DBManager.testIncrement();
    }

    
    addVehicleToAccount(targetAccount,vehicle){
        targetAccount.addVehicle(vehicle);
    }

    //login checking
    login(email,password){
        
    }

    newCustomer(email,userName,password,phoneNumber){
        var temp = new Customer(email, userName, password, phoneNumber);
        DBManager.createAccountCustomer(temp);
    }

    newAdmin(email,userName,password,phoneNumber){
        var temp = new Admin(email,userName,password,phoneNumber);
        DBManager.createAccountAdmin(temp);
    }


}
//exports 
module.exports = {UserController}

//Notes