class ParkingLot{
    #name = "";
    #spaces = []


    constructor(name){
        this.#name = name;
    }
    
    populate(x){
        for(let y=0;y<x;y++){
            for(let z=0;z<20;z++){
                this.#spaces.push(new Space(y,z))
            }
        }
    }
}


var lot = new ParkingLot("Test");
lot.populate(2);
console.log(lot);
