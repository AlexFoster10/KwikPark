const {Space} = require("./space.js");

class ParkingLot{
    #name = "";
    #spaces = [];
    
    #admins = [];
    #pricePerHour = 0;
    #earnings = 0;


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

    GetArrayStatus(){
        var bookedCount = 0;
        var unBookedCount = 0;
        
        for(let x = 0;x < this.#spaces.length;x++){
            if(this.#spaces[x].GetStatus()){
                bookedCount++;
            }
            
        }
        unBookedCount = this.#spaces.length - bookedCount;
        console.log("Booked = ",bookedCount, " UnBooked = ", unBookedCount);
        // for(let y=0;y<;y++){
        //     this.#spaces[y].GetStatus();
        // }
    }

    ChangePricePerHour(newPrice){
        this.#pricePerHour = newPrice;
    }

    GetPricePerHour(){
        return this.#pricePerHour;
    }
    AddEarnings(price){
        this.#earnings + price;
    }

    GetSpaceFromId(ID){
        for(let x = 0;x < this.#spaces.length;x++){
            if (this.#spaces[x].GetId() == ID){
                
                return this.#spaces[x];
            }
        }
    }
    GetName(){
        return this.#name;
    }
}


module.exports = {ParkingLot};