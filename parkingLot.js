class ParkingLot{
    #name = "";
    #spaces = [];
    #admins = [];


    constructor(name){
        this.#name = name;
    }
    
    //x is zone number a is space number
    populate(x,a){
        //can only populate if no spaces
        if (this.#spaces.length==0){
            for(let y=0;y<x;y++){
                for(let z=0;z<a;z++){
                    this.#spaces.push(new Space(y,z));
                }
            }
        }
        else{
            console.log("Spaces Already Present");
        }

    }
}


var lot = new ParkingLot("Test");
lot.populate(3,5);
console.log(lot);
