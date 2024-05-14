const fs = require('fs') 
const {User} = require('./user.js');
const { callbackify } = require('util');

const readline = require('readline'); 
var count = 0;

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

    sendMessage(text, sender){
        this.messageList.unshift(text + " ~ "+sender);
    }

    writeToFile(){
 
        fs.writeFileSync("Messages/"+this.messageTitle,JSON.stringify(this), callbackify)
    }

    readFromFile(){
       
        const data = fs.readFileSync("Messages/"+this.messageTitle,{ encoding: 'utf8', flag: 'r' });
 

        console.log(data);
        
        var object = JSON.parse(data);
        for(let x = 0; x < this.messageList.length;x++){
            console.log(object.messageList[x]);
        }
        
    }

}


module.exports = {Message}