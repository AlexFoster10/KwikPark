
const { DBManager } = require('./DBManager.js');

class UserController{
    constructor(){
        
        
    }

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

module.exports = {UserController}