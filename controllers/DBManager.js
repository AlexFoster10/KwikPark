//imports
const { User } = require('../classes/user.js');
const { Customer } = require('../classes/customer.js');
const { Admin } = require('../classes/admin.js');
const { Password } = require('../classes/Password.js');


//content 
class DBManager{

   static testNum = 0;
   static customerArray = [];
   static adminArray = [];

    constructor(){ 
    }

    static getCustomerArray(){
        for(var x=0;x<this.customerArray.length;x++){
            console.log(customerArray.at(x));
        }
    }

    //testfunctions
    static testIncrement(){
        this.testNum ++;
    }

    static getTestNum(){
        return this.testNum;
    }
    
    //account creation
    static createAccountCustomer(temp){
        this.customerArray.push(temp);
        console.log(temp.getEmail());
    }
    
    static createAccountAdmin(temp){
        //Password.hashPassword(passwordTemp);
        //adminMap.set(email,{userName: userName, password: password, phoneNumber: phoneNumber})
        this.adminArray.push(temp);
    }


    static checkCustomerAccountExists(email){
        
        if(acc == null){
            return false;
        }
        else{
            //search the database
            return acc;
        }
    }

    static searchCustomerArray(customerToFind){
        for(var x=0;x<this.customerArray.length;x++){
            console.log(this.customerArray.at(x));
            if(this.customerArray.at(x).getEmail() == customerToFind){
                console.log("found");
                return this.customerArray.at(x);
            }
        }
        console.log("error no such entry");
        return false;
    }

    // static customerMapSize(){
    //     return this.customerArray.size;
    // }
   
}   

//exports
module.exports = {DBManager}

//Notes