// const { builtinModules } = require("module");
const mongoose = require("mongoose");
// const { required } = require("nodemon/lib/config");
//customer model
const Comment = mongoose.model('Comment',{
    
   text:{
       type:String
   },

   user:{
    type: mongoose.Schema.Types.ObjectId, ref: "User"
   },
   cook:{
    type: mongoose.Schema.Types.ObjectId, ref: "Cook"
   },
   
   rating:{
    type:Number,

   }


})

module.exports = Comment;