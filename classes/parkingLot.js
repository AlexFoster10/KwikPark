const {Space} = require("./space.js");
const {Booking} = require("./booking.js");
const {User} = require("./user.js");
const {HashTable} = require("./hashTable.js");
const {MessageController} = require("../controllers/messageController.js");

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

    messageController = new MessageController();

    setSpaces(array){
        this.#spaces = array;
    }
    
addSpaces(area,amount){
    var count = 0;
    for(let x = 0;x < this.#spaces.length;x++){
        
        if(this.#spaces[x].GetArea() == area){
            count++;
        }

    }
    for(let x = 0;x < amount;x++){
        
        this.#spaces.push(new Space(area,count+x));
    }
}

removeSpaces(area,amountToRemove){
    var count = 0;
    for(let x = this.#spaces.length - 1; x > 0;x--){
        if(this.#spaces[x].GetArea() == area){
            count++;
            if(count <= amountToRemove){
                this.#spaces.splice(this.#spaces[x], 1);
            }
        }
    }
    
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
        var bool = space.attemptBooking(day,month,year,time1,time2);
        if(bool){
            space.setBooked();
            var data = new Booking(user,space,day,month,year,time1,time2);
            var hash = this.#bookings._hash(data.getBookingId());
            this.#bookings.set(hash, data);
            messageController.sendNotification(user.getEmail(),511,time1 + " - " + time2, space.GetId())
            return true;
        }
        if(!bool){
            return false;
        }
    }
}


module.exports = {ParkingLot};