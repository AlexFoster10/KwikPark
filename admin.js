class Admin extends User {
    level = 1
    

}

var test = new Admin('email','bob','secret');
console.log(test);