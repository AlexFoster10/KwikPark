class ParkingLot{
    #name = "";
    #spaces = [];
    #admins = [];
    #pricePerHour = 0;

    constructor(name){
        this.#name = name;
    }

    SetSpaces(array){
        this.#spaces = array;
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

    GetStatus(){
        for(let y=0;y<this.#spaces.length;y++){
            this.#spaces[y].GetStatus();
        }
    }

    ChangePricePerHour(newPrice){
        this.pricePerHour = newPrice;
    }

    GetPricePerHour(){
        return this.pricePerHour;
    }
}


module.exports = {ParkingLot};