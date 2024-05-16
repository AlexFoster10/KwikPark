const {Space} = require('./space.js');

class Booking{
    #bookingID = "";
    #user;
    #space;
    #date;
    #endTime = "";
    #startTime = "";
    #isCheckedIn = false;

    static createRandomString(length) {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; //char list
        let result = "";
        for (let i = 0; i < length; i++) {
          result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }



    constructor(user,space,day,month,year,endTime,startTime){
        this.#bookingID = Booking.createRandomString(10);
        this.#user = user;
        this.#space = space;
        
        this.#date = day + "-" + month + "-" + year;
        
        this.#endTime = endTime;
        this.#startTime = startTime;
    }

    

    CheckIn(){
        this.isCheckedIn = true;
    }

    getBookingId(){
        return this.#bookingID;
    }

    

}
module.exports = {Booking};