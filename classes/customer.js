//imports
const {User} = require('./user.js'); // i change path in here and admion from ./User to just User, if broken change back


class Customer extends User{
    super;
    #bal = 0;
    #cars = [];
    #badgeholder = false;


addVehicle(Vehicle){
    this.#cars.push(Vehicle);
}

removeVehicle(Vehicle){
    const index = this.#cars.indexOf(Vehicle);
    if (index > -1) { // only splice array when item is found
        array.splice(index, 1); // 2nd parameter means remove one item only
    }
}

toggleBadge(){
    if(this.#badgeholder){
        this.#badgeholder = false;
    }
    else{
        this.#badgeholder = true;
    }
}

toString(){
    console.log(this.getEmail());
    console.log(this.getUsername());
    console.log(this.getPhoneNumber());
    console.log(this.getPassword());
}

SetBal(amount){
    this.#bal = amount;
}

GetBal(){
    return this.#bal;
}

}

//exports
module.exports = {Customer}