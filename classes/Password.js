const Bcrypt = require('bcrypt');

const saltRounds = 10;
var userPassword;
var salt;
var hashedPassword;
Bcrypt.genSalt(saltRounds,(err,salt) =>{
   if(err){
       return;    
    }
    
    return salt;
})
Bcrypt.hash(userPassword,salt,(err,hash)=>{
    if(err){
        return;
    }
    return hash;
})
Bcrypt.compare(userPassword, hashedPassword, (err, result) => {
    if (err) {
    // Handle error
    console.error('Error comparing passwords:', err);
    return result;
    }
    if(result){
        console.log("TADA");
    }
    else{
        console.log("booooo");
    }
})
class Password{


    hashPassword(){
        console.log("here1")
        //hashedPassword = Bcrypt.hash(password,Bcrypt.genSalt(10));
        console.log("here")
        //Bcrypt.compare(password,"asdasd");
        
    }
    
    
}

