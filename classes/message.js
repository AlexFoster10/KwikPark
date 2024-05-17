const fs = require('fs') 
const {User} = require('./user.js');
const { callbackify } = require('util');

const readline = require('readline'); 

class Message{

    sender;
    reciever;
    body;


    constructor(sender, reciever, body){
        this.sender = sender;
        this.reciever = reciever;
        this.body = body;
    }

    toString(){
        console.log(this.sender);
        console.log(this.reciever);
        console.log(this.body)
    }

    getMessages(){

    }

    setMessages(msg){

    }

    sendMessage(text, sender){

    }

    writeToFile(){
        fs.writeFileSync("Messages/"+this.sender+"--"+this.reciever , callbackify);
    }

    readFromFile(){
       
    }

}


module.exports = {Message}