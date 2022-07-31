// const { builtinModules } = require("module");
const mongoose = require("mongoose");
// const { required } = require("nodemon/lib/config");
//customer model
const Book = mongoose.model('Book',{
    
    firstname : {
        type : String
    },
    lastname : {
        type : String
    },   

    phone : {
        type : String
    },
  
    email : {
        type : String
    },

    address : {
        type : String
    },
   
    street: {
        type : String
    },

    workersname : {
        type : String
    },
   
    workersphone: {
        type : String
    },

    

   

})

module.exports = Book;