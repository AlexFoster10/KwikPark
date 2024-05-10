const fs = require('fs') 
const {User} = require('./user.js');
const { callbackify } = require('util');
class Message{

    constructor(user,user2){
        messageList = [];
        sender = user.getUserame();
        recipient = user2.getUserame();
    }

    sendMessage(text){
        messageList.unshift(text);
    }

    writeToFile(){
        fs.writeFile(send + "_" + recipient, JSON.stringify(Message), callbackify)
    }


}


module.exports = {Message}