const fs = require('fs') 
const { callbackify } = require('util');


class User{
    #email = "";
    #userName = "";
    #password = "";
    #phoneNumber = 0;
    static #level = 0;

    constructor(email, userName, password, phoneNumber){
        this.#email = email;
        this.#userName = userName;
        this.#password = password;   //this part subject to change
        this.#phoneNumber = phoneNumber;
    }

    getEmail(){
        return this.#email;
    }
    
    getUsername(){
        return this.#userName;
    }

    getPhoneNumber(){
        return this.#phoneNumber;
    }

    getPassword(){
        return this.#password;
    }

    // saveAccToDB(){
    //     fs.writeFileSync("Accounts/"+this.#email,JSON.stringify(this), callbackify);
    // }

    // readAccFromDB(){
    //     try{
    //         const data = fs.readFileSync("Accounts/"+this.#email,{ encoding: 'utf8', flag: 'r' });
    //         console.log(data);
    //         var object = JSON.parse(data);
    //         return object;
    //     }
    //     catch(e){
    //         return false;
    //     }
    // }
    
    
}

//exports
module.exports = {User};