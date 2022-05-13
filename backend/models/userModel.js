// const { builtinModules } = require("module");
const mongoose = require("mongoose");
// const { required } = require("nodemon/lib/config");
//customer model
const User = mongoose.model('User',{
    username : {
        type : String,
        
    },
    firstname : {
        type : String
    },
    lastname : {
        type : String
    },
    password : {
        type : String
    },
   
    
    email : {
        type : String
    },
    
    fullname : {
        type : String,
        
    },
    phone : {
        type : String
    },
    gender : {
        type : String
    },
    address : {
        type : String
    },
   
     dateofbirth: {
        type : String
    },
    photo:{
        type:String
    },
    id:{
        type:String
    }
})

module.exports = User