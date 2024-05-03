const { map } = require("../app");
//imports

//content 
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

    //testfunctions
    static testIncrement(){
        this.testNum ++;
    }

    static getTestNum(){
        return this.testNum;
    }
    


}
//exports
module.exports = {DBManager}

//Notes