class Space{
    #booked = false;
    #area = 0; 
    #id = 0; 


    constructor(area,id){
        this.#area = area;
        this.#id = id;
        this.#booked = false

    }

    GetStatus(){
        return this.#booked;
    }

    setBooked(bool){
        this.#booked = bool;
    }

    GetId(){
        return this.#id;
    }
} 

module.exports = {Space};