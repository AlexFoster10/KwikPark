const {Space} = require("./space.js");
const {Booking} = require("./booking.js");
const {User} = require("./user.js");
const {HashTable} = require("./hashTable.js");

class ParkingLot{
    #name = "";
    #spaces = [];
    #bookings = new HashTable(0);
    #admins = [];
    #pricePerHour = 0;
    #earnings = 0;


    constructor(name){
        this.#name = name;
    }

    setSpaces(array){
        this.#spaces = array;
    }
    
    //x is zone number a is space number
    populate(x,a){
        this.#bookings.addSize(a);
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
        this.#bookings= new HashTable(this.#spaces.length)

    
    }

    getArrayStatus(){
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

    changePricePerHour(newPrice){
        this.#pricePerHour = newPrice;
    }

    getPricePerHour(){
        return this.#pricePerHour;
    }
    addEarnings(price){
        this.#earnings + price;
    }

    getSpaceFromId(ID){
        for(let x = 0;x < this.#spaces.length;x++){
            if (this.#spaces[x].GetId() == ID){
                
                return this.#spaces[x];
            }
        }
    }

    getName(){
        return this.#name;
    }


    removeBookingFromList(booking){
        var hash = this.#bookings._hash(booking.getBookingId());
        this.#bookings.remove(hash);
    }

    getBookings(){
        console.log(this.#bookings);
        // for(let x = 0; x < this.#bookings.length;x++){
        //     if(this.#bookings[x].User.getUsername() == User.getUsername()){
        //         return this.#bookings[x];
        //     }
        // }
    }

    getBooking(key){
        var data = this.#bookings.get(this.#bookings.__hash(key));
        console.log(data);
    }

    createBooking(user,space,day,month,year,time1,time2){
        
        var data = new Booking(user,space,day,month,year,time1,time2);
        var hash = this.#bookings._hash(data.getBookingId());
        
        this.#bookings.set(hash, data);
        
    }
}


module.exports = {ParkingLot};