//imports
const { User } = require('../classes/User.js');
const { Customer } = require('../classes/Customer.js');
const { Admin } = require('../classes/Admin.js');
const { Password } = require('../classes/Password.js');


//content 
class DBManager{

   static testNum = 0;
   static customerArray = [];
   static adminArray = [];

    constructor(){ 
    }


    static checkUser(email){
        if(email in this.userMap){
            return true;
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
        console.log(this.customerArray);
        
        if(!this.customerArray.includes(email)){
            return this.searchCustomerArray(email);
        }
        else{
            console.log("Database goes here");
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
    }

    // static customerMapSize(){
    //     return this.customerArray.size;
    // }
   
}   

//exports
module.exports = {DBManager}

//Notes