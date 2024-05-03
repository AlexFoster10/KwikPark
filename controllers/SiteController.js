// imports
const { DBManager } = require('./DBManager.js');


class SiteController{
    #parkingLots = [];

    constructor(){
        
    }

    addLot(parkingLot){
        this.#parkingLots.push(parkingLot);
    }

    removeLot(parkingLot){
        const index = this.#parkingLots.indexOf(parkingLot);
        if (index > -1) { // only splice array when item is found
            array.splice(index, 1); // 2nd parameter means remove one item only
        }
    }


}

module.exports = {SiteController}