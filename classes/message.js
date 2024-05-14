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

    sendMessage(text){
        this.messageList.unshift(text);
    }

    writeToFile(){
        fs.writeFileSync(this.messageTitle,JSON.stringify(this), callbackify)
    }

    readFromFile(){
        const file = readline.createInterface({ 
            input: fs.createReadStream(this.messageTitle), 
            output: process.stdout, 
            terminal: false
        }); 
        file.on('line', (line) => { 
            count++;
            var lines = line.split("[");
            lines = lines[1].split("]");
            lines = lines[0].split(",");
            for(let x = 0; x < lines.length;x++ ){
                console.log(lines[x]);
            }
            
           
        });
    }

}


module.exports = {Message}