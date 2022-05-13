const multer = require('multer');


//file upload
 const storage= multer.diskStorage({
     destination:function(req, file,cb){
         cb(null,'./user_images')
     },

    //  filename: function(req, file, cb){
    //      cb(null,"ram.jpg")
    //  }

     filename: function(req, file, cb){
        cb(null , Date.now() + file.originalname)
    }

 })


 //we need to code for filtering file-


 const filter= function(req, file, cb){
     if(file.mimetype== "image/jpeg" || file.mimetype== 'image/png'){
            cb(null,true)
     }
     else{
            cb(null, false)
     }
 }

 const upload= multer({
     storage:storage,
     fileFilter:filter
 })

 module.exports = upload;