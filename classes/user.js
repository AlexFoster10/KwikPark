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
    
}


