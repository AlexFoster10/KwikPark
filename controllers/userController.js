// imports
const { DBManager } = require('./DBManager.js');

//content 
class UserController{
    constructor(){
        
        
    }
    //testing
    connectionTest(){
        DBManager.testIncrement();
    }

    //account creation
    createAccount(email,userName,password,phoneNumber){
        

    }


    //login checking
    login(email,password){
        
    }


}
//exports 
module.exports = {UserController}

//Notes