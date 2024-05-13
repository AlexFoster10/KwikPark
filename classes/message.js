const fs = require('fs') 
const {User} = require('./user.js');
const { callbackify } = require('util');
class Message{
    messageList = [];
    sender="";
    recipient="";
    messageTitle="";

    constructor(user,user2){
        this.sender = user.getUsername();
        this.recipient = user2.getUsername();
        this.messageTitle = (this.sender + "_" + this.recipient)
        
    }

    getMessages(){
        return this.messageList;
    }

    sendMessage(text){
        this.messageList.unshift(text);
    }

    writeToFile(){
       fs.writeFileSync(this.messageTitle,JSON.stringify(this.messageList), callbackify)
    }


}


module.exports = {Message}