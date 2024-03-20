class Customer extends User{
    #bal = 0;
    #cars = [];


addVehicle(Vehicle){
    this.#cars.push(Vehicle);
}

removeVehicle(Vehicle){
    const index = this.#cars.indexOf(Vehicle);
    if (index > -1) { // only splice array when item is found
        array.splice(index, 1); // 2nd parameter means remove one item only
    }
}

}