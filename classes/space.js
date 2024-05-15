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
    
    attemptBooking(day,month,year,time1,time2){
        var array = [];
        var collision = false;
        array.push(day);
        array.push(month);
        array.push(year);
        array.push(time1);
        array.push(time2);
        console.log(array);
        console.log("herer");
        //array[date,time1,time2]
        console.log(this.#bookedTimes.length);
        for(let x = 0;x < this.#bookedTimes.length;x++){
            
            if(array[0] == this.#bookedTimes[x][0]){
                
                if(array[1] == this.#bookedTimes[x][1]){
                    
                    if(array[2] == this.#bookedTimes[x][2]){
                        
                        if(array[3] > this.#bookedTimes[x][3] && array[3] < this.#bookedTimes[x][4] || array[4] > this.#bookedTimes[x][3] && array[4] < this.#bookedTimes[x][4] || array[3] < this.#bookedTimes[x][3] && array[4] > this.#bookedTimes[x][4] || array[3] == this.#bookedTimes[x][3] &&array[4] == this.#bookedTimes[x][4] )
                            console.log("date already booked");
                            collision = true;
                        }
                }
            }
        }
        if(collision == false){
            console.log("booking successfully added");
            this.#bookedTimes.push(array);
            
        }

        
        
    }

    

} 

module.exports = {Space};
 
