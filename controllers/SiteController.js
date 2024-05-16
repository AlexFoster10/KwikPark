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

    getParkingLot(name){
        for(let x = 0; x < this.#parkingLots.length;x++){
            if(this.#parkingLots[x].getName() == name){
                return this.#parkingLots[x];
            }
        }
    }


}

module.exports = {SiteController}