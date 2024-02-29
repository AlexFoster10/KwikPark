class User{
    constructor(email, userName, password){
        this.email = email;
        this.userName = userName;
        this.password = password;   //this part subject to change

    }
}

var bob = new User('testMail','Sam','pword');
console.log(bob);