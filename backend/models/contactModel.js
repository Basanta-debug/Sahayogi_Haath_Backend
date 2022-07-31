// const { builtinModules } = require("module");
const mongoose = require("mongoose");
// const { required } = require("nodemon/lib/config");
//customer model
const Contact = mongoose.model('Contact',{
    
    name : {
        type : String
    },

    email:{
        type:String
    },

    subject:{
        type:String
    },
    
    message:{

        type:String,

    },



})

module.exports = Contact;