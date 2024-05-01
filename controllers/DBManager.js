const { map } = require("../app");
class DBManager{

   static testNum = 0;

    constructor(){
        const userMap = new map;
        
    }

    static checkUser(email){
        if(email in userMap){
            return true;
        }
    }

    static testIncrement(){
        this.testNum ++;
    }
    


}