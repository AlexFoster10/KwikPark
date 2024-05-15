class Space{
    #booked = false;
    #area = 0; 
    #id = 0; 
    #bookedTimes = [];      //{"10-12-2004,1400-1500","10-13-2004,1600-1730"} //1012200414001500


    constructor(area,id){
        this.#area = area;
        this.#id = id;
        this.#booked = false

    }

    GetStatus(){

        console.log("Space ID: "+ this.#id + " Booking Status: "+ this.#booked)
        return this.#booked;
    }

    setBooked(){
        this.#booked = true;
    }
    
    setNotbooked(){
        this.#booked = false;
    }

    GetId(){
        return this.#id;
    }
    attemptBooking(date){
        console.log("");
    }

} 

module.exports = {Space};
 
