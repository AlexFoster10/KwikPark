class Space{
    #booked = false;
    #area = 0; 
    #id = 0; 
    #bookedTimes = []; 


    constructor(area,id){
        this.#area = area;
        this.#id = id;
        this.#booked = false

    }

    GetStatus(){
        console.log("Space ID: "+ this.#id + " Booking Status: "+ this.#booked)
    }

    setBooked(bool){
        this.#booked = bool;
    }

    GetId(){
        return this.#id;
    }
    attemptBooking(date){
        console.log("");
    }

} 

    
 
