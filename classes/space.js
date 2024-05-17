class Space{
    #booked = false;
    #area = 0; 
    #id = 0; 
    #bookedTimes = [];      //{"10-12-2004,1400-1500","10-13-2004,1600-1730"} //1012200414001500
    #blocked = false;

    constructor(area,id){
        this.#area = area;
        this.#id = id;
        this.#booked = false;
        this.#blocked = false;
    }

    GetStatus(){

        console.log("Space ID: "+ this.#id + " Booking Status: "+ this.#booked)
        return this.#booked;
    }

    setBlocked(){
        this.#blocked = true;
    }

    setUnBlocked(){
        this.#blocked = false;
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
    GetArea(){
        return this.#area;
    }
    
    attemptBooking(day,month,year,time1,time2){

        if(this.#blocked == true){
            return false;
        }

        var array = [];
        var collision = false;
        array.push(day);
        array.push(month);
        array.push(year);
        array.push(time1);
        array.push(time2);
        console.log(array);
        

        
       
        for(let x = 0;x < this.#bookedTimes.length;x++){
            
            if(array[0] == this.#bookedTimes[x][0]){
                if(array[1] == this.#bookedTimes[x][1]){
                    if(array[2] == this.#bookedTimes[x][2]){
                        

                        //array[3] <= this.#bookedTimes[x][4] && this.#bookedTimes[x][3] <= array[4]
                        //array[3] > this.#bookedTimes[x][3] && array[3] < this.#bookedTimes[x][4]) || (array[4] > this.#bookedTimes[x][3] && array[4] < this.#bookedTimes[x][4]) || (array[3] < this.#bookedTimes[x][3] && array[4] > this.#bookedTimes[x][4]) ||(array[3] == this.#bookedTimes[x][3] && array[4] == this.#bookedTimes[x][4])
                        if(array[3] <= this.#bookedTimes[x][4] && this.#bookedTimes[x][3] <= array[4] ){
                            console.log("slot already booked");
                            collision = true;
                            
                        }
                        
                }
            }
        }
    }
       
        if(collision == false){
            console.log("booking successfully added");
            this.#bookedTimes.push(array);
            return true;
        }
        else{
            
            return false;
        }

        
        
    }

    

} 


module.exports = {Space};
 
