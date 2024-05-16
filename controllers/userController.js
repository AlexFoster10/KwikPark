
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
    async loginCheck(email, password){
        console.log("\n\n#######################################################\n login check \n#######################################################")
        const temp = await DBManager.searchCustomerArray(email);
        if(temp != false){
            console.log(password,"\n",temp.getPassword());
            const ret = await this.compare(password, temp.getPassword());
            if(ret == true){
                return "200";
            }else{
                return "210";
            }
        }else{
            return "209";
        }
    }

    async newCustomer(email,userName,password,phoneNumber){
        console.log("\n\n#######################################################\n account creation \n#######################################################")
        const temp1 = await DBManager.searchCustomerArray(email);
            if(temp1 == false){
                console.log("account can be created")
                const encryptedPassword = await this.encrypt(password);
                console.log("#############ENCRYPTED_PW#################");
                const temp2 = new Customer(email, userName, encryptedPassword, phoneNumber);
                console.log("##############################");

                DBManager.createAccountCustomer(temp2);
                DBManager.saveAccToDB(temp2);
                return true;   
            }else{
                console.log("account alredy exists");
                return false;
            }
       

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
        console.log("\n\n#######################################################\n comparison \n#######################################################");
        var isSame = await bcrypt.compare(guess, password) 
        console.log("comparison result:")
        console.log(isSame);
        return isSame;
    }

    async hashPassword(password, password2) { // updated
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)
        const isSame = await bcrypt.compare(password2, hash) // updated
        console.log(isSame); // updated
    }

    


}
//exports 
module.exports = {UserController}

//Notes