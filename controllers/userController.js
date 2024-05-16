
const { DBManager } = require('./DBManager.js');

const { Customer } = require('../classes/customer.js');



const { Vehicle } = require('../classes/Vehicle.js');
const bcrypt = require('bcrypt');


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

    async newCustomer(email,userName,password,phoneNumber){
        console.log("start of acount generation");
        const encryptedPassword = await this.encrypt(password);
        const temp = new Customer(email, userName, encryptedPassword, phoneNumber);
        DBManager.createAccountCustomer(temp);
        DBManager.saveAccToDB(temp); 
        console.log("end of acount generation");
    }

    newAdmin(email,userName,password,phoneNumber){
        var temp = new Admin(email,userName,this.encrypt(password),phoneNumber);
        DBManager.createAccountAdmin(temp);
    }

    async encrypt(password) {
        const salt = await bcrypt.genSalt(10)
        return await bcrypt.hash(password, salt)
    }

    async compare(guess, password){
        var isSame = await bcrypt.compare(guess, password) 
        console.log(isSame) 
        return isSame;
    }

    async hashPassword(password, password2) { // updated
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)
        const isSame = await bcrypt.compare(password2, hash) // updated
        console.log(isSame); // updated
    }

    checkPassword(email,password){
        const temp = DBManager.searchCustomerArray(email);
        if(temp != null){
            if(this.compare(password,temp.getPassword())){
                console.log("same")
                return true;
            }else{
                console.log("not same")
                return false;
            }
        }
    }


}
//exports 
module.exports = {UserController}

//Notes