const { Message } = require('../classes/message.js');
class MessageController{

    constructor(){
    }

    createMessage(user,user2){
        temp = new Message(user,user2);
        return temp;
    }

    sendMessage(user,message,body){
        
        temp.sendMessage()
    }


    



}