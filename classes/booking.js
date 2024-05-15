const {Space} = require('./space.js');

class Booking{
    user;
    space;
    endTime = "";
    startTime = "";
    isCheckedIn = false;

    constructor(user,space,endTime,startTime){
        this.user = user;
        this.space = space;
        this.space.setBooked();
        this.endTime = endTime;
        this.startTime = startTime;
    }


    CheckIn(){
        this.isCheckedIn = true;
    }

    

}
module.exports = {Booking};