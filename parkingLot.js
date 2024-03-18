class ParkingLot{
    #name = "";
    #spaces = []


    constructor(name){
        this.#name = name;
    }
    
    //x is zone number a is space number
    populate(x,a){
        for(let y=0;y<x;y++){
            for(let z=0;z<a;z++){
                this.#spaces.push(new Space(y,z))
            }
        }
    }
}


var lot = new ParkingLot("Test");
lot.populate(3,5);
console.log(lot);
