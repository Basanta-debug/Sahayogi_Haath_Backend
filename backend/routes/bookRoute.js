const express = require("express");

const Book = require("../models/bookModel");

const router = new express.Router();


router.post("/book/add",function (req, res) {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const phone = req.body.phone;
    const address = req.body.address;
    const email = req.body.email
    const street = req.body.street;
    const workersname=req.body.workersname;
    const workersphone= req.body.workersphone


    const pdt = new Book({
      firstname: firstname,
      lastname: lastname,
      phone: phone, 
      address: address,
      street: street,
      email:email,
      workersname:workersname,
      workersphone:workersphone

      
    });

    pdt
      .save()
      .then(function () {
        res.json({ msg: "booked" });
      })

      .catch(function () {
        res.json({ msg: "Something went wrong!" });
      });
  }
);



router.get("/booking/details", function (req, res) {
    const firstname = req.body.firstname;
      const lastname = req.body.lastname;
      const phone = req.body.phone;
      
      const address = req.body.address;
      const street = req.body.street;
      
      
    //make userid in product model
  
    Book.find(firstname, lastname, phone, street,address)
      .then(function (result) {
        res.json(result);
        console.log(result);
      })
  
      .catch(function () {
        res.json({ msg: "something went wrong" });
      });
  });
  
  
module.exports = router;