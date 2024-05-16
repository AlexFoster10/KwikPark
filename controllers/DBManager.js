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
        //console.log(temp.getEmail());
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

    static async searchCustomerArray(customerToFind){
        for(var x=0;x<this.customerArray.length;x++){
            console.log(this.customerArray.at(x));
            if(this.customerArray.at(x).getEmail() == customerToFind){
                console.log("found");
                return this.customerArray.at(x);
            }
        }
        console.log("error no such entry in RAM");
        const temp = await this.readAccFromDB(customerToFind);
        console.log(temp.toString());
        if(temp == false){
            console.log(`${customerToFind} is not present in the long term data base`)
            return false;
        }else{
            console.log("found in the persistant database")
            this.createAccountCustomer(temp);
            console.log(temp.toString());
            return temp;
        }
        
    }

    // static customerMapSize(){
    //     return this.customerArray.size;
    // }

    static saveAccToDB(user){
        const data = {
            email: user.getEmail(),
            username: user.getUsername(),
            password: user.getPassword(),
            phoneNumber: user.getPhoneNumber()
        }
        
        fs.writeFileSync("Accounts/"+user.getEmail()+".JSON",JSON.stringify(data), callbackify);
    }
    
    static readAccFromDB(emailToFind){
        try{
            const data = fs.readFileSync("Accounts/"+emailToFind+".JSON",{ encoding: 'utf8', flag: 'r' });
            const object =  JSON.parse(data);
            
            var user = new Customer(object.email, object.username, object.password, object.phoneNumber);
            
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