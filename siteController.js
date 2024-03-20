class SiteController{
    #lots = [];
    #name = "";

    constructor(name){
        this.#name = name;
        
    }

    addLot(lot){
        this.#lots.push();
    }

    removeLot(lotName){
        const index = array.indexOf(lotName);
        if (index > -1) { // only splice array when item is found
            array.splice(index, 1); // 2nd parameter means remove one item only
}
    }
}