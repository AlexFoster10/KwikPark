const {User} = require('./user.js');

class Admin extends User {
    static #level = 1
    #siteController;
    #userController;
checkLotStatus(parkingLot){
    parkingLot.GetStatus();
}

constructor(siteController,userController){
    this.#siteController = siteController;
    this.#userController = userController;
};



}

module.exports = {Admin};