const {User} = require('./user.js');

class Admin extends User {
    static #level = 1
        
checkLotStatus(parkingLot){
    parkingLot.GetStatus();
}


}

module.exports = {Admin};