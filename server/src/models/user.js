const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: {
        type:String,      
    },
    email:{
        type:String,        
        
    },
    password:
    {
        type:String,       
        minlength:6
    },
    role:
    {
        type:String,
        enum:["admin","customer"],
        default:"customer"
    }


  });

  const User = mongoose.model('User', userSchema);
  module.exports=User;