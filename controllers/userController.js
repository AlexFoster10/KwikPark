
const { DBManager } = require('./DBManager.js');
const { vehicle } = require('./classes/Vehicle.js')


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


}
//exports 
module.exports = {UserController}

//Notes