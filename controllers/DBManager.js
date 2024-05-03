const { map } = require("../app");


class DBManager{

   static testNum = 0;
   //static userMap = new map;

    constructor(){ 
    }

    static checkUser(email){
        if(email in this.userMap){
            return true;
        }
    }

    static testIncrement(){
        this.testNum ++;
    }

    static getTestNum(){
        return this.testNum;
    }
    


}

module.exports = {DBManager}