const { builtinModules } = require("module");
const mongoose = require("mongoose");

const Admin = mongoose.model('Admin',{
    username : {
        type : String
    },

    isUser:{
        type:Boolean,
        default:false

    },

    isAdmin:{
        type:Boolean,
        default:true
    },

    password : {
        type : String
    },
})

module.exports = Admin;