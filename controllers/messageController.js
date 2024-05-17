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
                "messages": []
            }
            const file = user1+"--"+user2+".JSON"
            
            fs.appendFileSync("Messages/"+file, JSON.stringify(data) ,callbackify);
            return file;
    }

    async newMessage(sender, reciever, body){
        var file = await this.findConversation(sender,reciever);
        if(file == null){
            file = this.initialiseMessage(sender,reciever);
        }
        
        // create the new message object
        const temp = new Message(sender, reciever, body);
        
        //appends it to the conversation
        const jsonData = this.grabMessageData(file);
        console.log(temp);
        console.log(jsonData);
        await jsonData['messages'].push(temp);
        fs.writeFileSync("Messages/"+file,JSON.stringify(jsonData),callbackify);
    }

    grabMessageData(fileName){
        const data = fs.readFileSync("Messages/"+fileName,callbackify);
        const jsonData = JSON.parse(data);
        return jsonData;
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

    async findConversation(sender, reciever){
        const order1 = sender + "--" + reciever + ".JSON";
        const order2 = reciever + "--" + sender + ".JSON";
        var found = null;

        let o1 = await fs.existsSync("Messages/"+order1);
        console.log("order1: "+o1+" for "+order1);
        let o2 = await fs.existsSync("Messages/"+order2);
        console.log("order2: "+o2+" for "+order2);
        
        if(o1 == true){
            found = order1;
            console.log("order1: "+order1);
        }
        else if(o2 == true){
            found = order2;
            console.log("order2: "+order2);
        }
        if(found == null){
            console.log("no path was found")
        }
        return found;
                
        }

    

    


 
    async sendNotification(recipient, code, additionalData1, additionalData2){ // recipiant has to be the email in string form
        const sender = "System@kwikpark.co.uk"
        try{
        switch(code){
            case 510: // arived at parking space
                this.newMessage(sender, recipient, "You have arrived at space:"+additionalData1);
                break;
            case 511: // booking has been sucsesfully made
                this.newMessage(sender, recipient, "Your booking for:"+additionalData+
                "at lot"+additionalData2+"has been succsessful");
                break;
            case 512: // your parking time has expired your now on pay as you go rate
                break;
            case 513: // funds sucsesfully added to your account
                break;
            case 514: // there is a new unexpected arival
                break;
            case 515: // a new car has arrived at the car park
                break;
            case 516: // a car has left the car park
                break;
            case 517: // a new booking has been made
                break;
            case 518: // transaction sucsessful
                break;
            case 600: // booking has been unsucsessful
                break;
            case 601: // transaction unsucsessful
                break;
            case 602:
                break; //                          
        }   
        }
        catch(e){
            return 0;
        }
    }
}



    




module.exports = {MessageController}