class Admin extends User {
    static #level = 1
    

}

var test = new Admin('email','bob','secret',43565465);
console.log(test);