const fs = require('fs') 
const {User} = require('./user.js');
const { callbackify } = require('util');
class Message{
    messageList = [];
    sender="";
    recipient="";

    constructor(user,user2){
        this.sender = user.getUsername();
        this.recipient = user2.getUsername();
    }

    getMessages(){
        return this.messageList;
    }

    sendMessage(text){
        this.messageList.unshift(text);
    }

    writeToFile(){
        fs.writeFile(send + "_" + recipient, JSON.stringify(Message), callbackify)
    }


}


module.exports = {Message}