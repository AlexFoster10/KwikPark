const { Message } = require('../classes/message.js');
const { User } = require('../classes/user.js');
const { callbackify } = require('util');
const fs = require('fs'); 
const { DBManager } = require('./DBManager.js');
const { use } = require('../app.js');
class MessageController{

    blank;

    constructor(){
    }


    // initialiseNotifs(recipient){
    //     this.initialiseMessage("System@kwikpark.co.uk",recipient);
    //     notifications.sendMessage("Welcome to your account, this is where you will recieve messages from the System, thanks for choosing kwikpark",this.sys.getEmail());
    //     notifications.writeToFile();
    // }

    initialiseMessage(user1, user2){
            const data = {
                messages : []
            }
            
            fs.appendFileSync("Messages/"+user1+"--"+user2+".JSON", JSON.stringify(data) ,callbackify);
    }

    async newMessage(sender, reciever, body){
        const file = await this.findConversation(sender,reciever);
        if(file == null){
            this.initialiseMessage(sender,reciever);
        }
        
        // create the new message object
        const temp = new Message(sender, reciever, body);
        
        //appends it to the conversation
        const jsonData = this.grabMessageData(file);
        await jsonData.messages.push(temp);
        fs.writeFileSync("Messages/"+file,jsonData,callbackify);
    }

    grabMessageData(fileName){
        const data = fs.readFileSync("Messages/"+fileName,body,callbackify);
        const jsonData = JSON.parse(data);
        return data;
    }

    async getMessages(sender, reciever){
        const file = await this.findConversation(sender,reciever);
        if(file == null){
            return null;
        }
        else{
            return grabMessageData(file);
        }
    }

    findConversation(sender, reciever){
        order1 = sender + "--" + reciever + ".JSON";
        order2 = reciever + "--" + sender + ".JSON";
        found = null;
        
        if(fs.existsSync("Messages/"+order1) == true){
            found = order1;
            console.log("order1: "+order1);
        }
        else if(fs.existsSync("Messages/"+order2) == true){
            found = order2;
            console.log("order2: "+order2);
        }
        
        return found;
                
        }

    

    }









 
    // async sendNotification(recipient, code, additionalData){ // recipiant has to be the email in string form
        
    //     try{
    //     const data = fs.readFileSync("Messages/SYSTEM_"+ recipient+".JSON",{ encoding: 'utf8', flag: 'r' });
    //     var data2 = JSON.parse(data);
    //     console.log("OBJ: " + data2);
    //     console.log("SENDER: " + data2.sender);
    //     console.log("RECIEVER: " + data2.recipient);
    //     console.log("Messages: " + data2.messages);
    //     var notifications = new Message(data2.sender,data2.recipient);
    //     console.log(notifications);
    //     console.log("///////");
    //     notifications.setMessages(data2.messages);
    //     console.log(notifications);
    //     switch(code){
    //         case 510: // arived at parking space
    //         notifications.sendMessage(`You have arrived at space ${additionalData}`,this.sys.getEmail()); 
    //         console.log(notifications.getMessages());
    //         notifications.writeToFile();
    //             break;
    //         case 511: // booking has been sucsesfully made
    //         notifications.sendMessage(`your booking for space ${additionalData} has been confirmed`,this.sys.getEmail());
    //         notifications.writeToFile();
    //             break;
    //         case 512: // your parking time has expired your now on pay as you go rate
    //             break;
    //         case 513: // funds sucsesfully added to your account
    //             break;
    //         case 514: // there is a new unexpected arival
    //             break;
    //         case 515: // a new car has arrived at the car park
    //             break;
    //         case 516: // a car has left the car park
    //             break;
    //         case 517: // a new booking has been made
    //             break;
    //         case 518: // transaction sucsessful
    //             break;
    //         case 600: // booking has been unsucsessful
    //             break;
    //         case 601: // transaction unsucsessful
    //             break;
    //         case 602:
    //             break; //                          
    //     }   
    // }
    // catch(e){
    //     return 0;
    // }
    // }



    




module.exports = {MessageController}