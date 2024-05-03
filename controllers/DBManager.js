//imports
const {User} = import('./classes/User.js');

//content 
class DBManager{

   static testNum = 0;
   static userMap = new Map();

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
    Customer createAccountCustomer(email,userName,password,phoneNumber){
        var temp = new Customer(email, userName, password, phoneNumber);
        return temp;
    }
    
    Admin createAccountAdmin(email,userName,password,phoneNumber){
        var temp = new Admin(email,userName,password,phoneNumber);
        return temp;
    }


}
//exports
module.exports = {DBManager}

//Notes