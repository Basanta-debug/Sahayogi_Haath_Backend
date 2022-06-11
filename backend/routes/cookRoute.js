const express = require("express");

const Cook = require("../models/cookModel");
const upload = require("../uploads/uploads");
const router = new express.Router();


//add cook route
router.post("/cook/add",upload.single("image"),function (req, res) {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const phone = req.body.phone;
    const gender = req.body.gender;
    const address = req.body.address;
    const age = req.body.age;
   
    const photo =req.file.filename;
    const experience = req.body.experience;
    const workinglocation = req.body.workinglocation;

    const pdt = new Cook({
      firstname: firstname,
      lastname: lastname,
      phone: phone,
      gender: gender,
      address: address,
      age: age,
      photo: photo,
      experience:experience,
      workinglocation:workinglocation
    });

    pdt
      .save()
      .then(function () {
        res.json({ msg: "Cook added!!" });
      })

      .catch(function () {
        res.json({ msg: "Something went wrong!" });
      });
  }
);


//get cook detailss
router.get("/cook/details", function (req, res) {
  const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const phone = req.body.phone;
    const gender = req.body.gender;
    const address = req.body.address;
    const age = req.body.age;
    const experience = req.body.experience;
    const workinglocation = req.body.workinglocation;
    
  //make userid in product model

  Cook.find(firstname, lastname, phone, gender,address,age,experience,workinglocation)
    .then(function (result) {
      res.json(result);
      console.log(result);
    })

    .catch(function () {
      res.json({ msg: "something went wrong" });
    });
});


//cook id for the single view
router.get("/cook/single/:id", function(req,res){
  const id = req.params.id;
  Cook.findOne({_id:id})
  .then(function(result){
    res.json(result)
    
  })
  .catch(function(){
     res.json({msg : "something went wrong"})
  })
})





//approval for cooks
router.put("/cook/approve",  function (req, res) {
  const id = req.body.id
  Cook.findOne({ _id: id })
      .then(function (result) {
                  if(result.isApproved){
                      Cook.updateOne({ _id: id }, { isApproved: false })
                  .then(function () {
                      res.json({ msg: "Visitor Details Approved Successfully", success: true })
                  })
                  }
                  else{
                      Cook.updateOne({ _id: id }, { isApproved: true })
                  .then(function () {
                      res.json({ msg: "Visitor Details Approved Successfully", success: true })
                  })
                  }
  })
})


//cook update by admin
router.put("/cook/update/:id",function(req,res){
  //update by params
  const id = req.params.id;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const phone = req.body.phone;
  const gender = req.body.gender;
  const address = req.body.address;
  const age = req.body.age;
  const experience = req.body.experience;
  const workinglocation = req.body.workinglocation;
  const photo = req.body.photo;
 
 
 //finding by id and then updating the corresponding details
  Cook.findByIdAndUpdate( {_id:id} ,{firstname:firstname, lastname:lastname, phone:phone, gender:gender, address:address,age:age, experience:experience, workinglocation:workinglocation,photo:photo},function(err,docs){
      if (!err){
        
          res.json({msg: "update successfully!" , success: true })
      }
      else{
          res.json({msg: err , success: true })
      }
      
  })
})

module.exports = router;
