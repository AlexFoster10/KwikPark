const {Space} = require('./space.js');

class booking{
    user;
    space;
    endTime = "";
    startTime = "";
    isCheckedIn = false;

    constructor(user,space,endTime,startTime){
        this.user = user;
        this.space = space;
        space.setBooked(true);
        this.endTime = endTime;
        this.startTime = startTime;
    }

    

    CheckIn(){
        this.isCheckedIn = true;
    }

    

}