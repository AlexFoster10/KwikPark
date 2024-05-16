//imports
const { User } = require('../classes/user.js');
const { Customer } = require('../classes/customer.js');
const { Admin } = require('../classes/admin.js');
const { Password } = require('../classes/Password.js');
const fs = require('fs') 
const { callbackify } = require('util');


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
        
        if(this.customerArray.includes(email)){
            return this.searchCustomerArray(email);
        }
        else{
            //console.log("Database goes here");
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
        console.log("error no such entry in RAM");
        const temp = readAccFromDB(customerToFind);
        if(temp == false){
            console.log(`${customerToFind} is not present in the long term data base`)
            return false;
        }else{
            this.createAccountCustomer(temp);
            return temp;
        }
        return null;
    }

    // static customerMapSize(){
    //     return this.customerArray.size;
    // }

    static saveAccToDB(user){
        fs.writeFileSync("Accounts/"+user.getEmail(),JSON.stringify(user), callbackify);
    }
    
    readAccFromDB(emailToFind){
        try{
            const data = fs.readFileSync("Accounts/"+emailToFind,{ encoding: 'utf8', flag: 'r' });
            console.log(data);
            var user = JSON.parse(data);
            return user;
        }
        catch(e){
            return false;
        }
    }
   
}   

//exports
module.exports = {DBManager}

//Notes