const express = require("express");

const User = require("../models/userModel");
const router = new express.Router();
const upload= require("../uploads/uploads");
const auth= require("../auth/authentication");


router.get("/profile/single/:uid", function(req,res){
    const uid = req.params.uid
    
    User.findOne({_id:uid})
    .then(function(result){
       
      res.json({'data':result})
    })
    .catch(function(){
       res.json({msg : "something went wrong"})
    })
})




module.exports=router
