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



router.put("/profile/insert/:pid",upload.single('profile_image'), function (req, res) {
    
    console.log(req.body)
   
    const fullname =req.body.fullname;
    const phone =req.body.phone;
    const gender =req.body.gender;
    const dateofbirth =req.body.dateofbirth;
    const address =req.body.address;
    const photo =req?.file?.filename;
    const profile = User.findOneAndUpdate(
        {_id:req.params.pid},
        
        {
      
        fullname:fullname,
        phone:phone,
        gender:gender,
        dateofbirth:dateofbirth,
        address:address,
        photo:photo,
    })
    .then(function (e) {
        console.log(e);
         res.json({mes:"data is inserted", success:true}) 
         }).catch(function (e) {
             console.log(e);
            res.json({
                mes:"something went wrong!!"
            })
     })
})



//approve by admin
  router.put("/profile/approve",  function (req, res) {
    const id = req.body.id
    User.findOne({ _id: id })
        .then(function (result) {
                    if(result.isApproved){
                        User.updateOne({ _id: id }, { isApproved: false })
                    .then(function () {
                        res.json({ msg: "Visitor kyc Approved Successfully", success: true })
                    })
                    }
                    else{
                        User.updateOne({ _id: id }, { isApproved: true })
                    .then(function () {
                        res.json({ msg: "Visitor kyc Approved Successfully", success: true })
                    })
                    }
    })
  })

module.exports=router
