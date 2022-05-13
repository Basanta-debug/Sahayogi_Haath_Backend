const express = require("express");
const bcryptjs = require("bcryptjs");
const User = require("../models/userModel");
const router = new express.Router();


const auth= require("../auth/authentication");
const upload= require('../uploads/uploads');
const jwt =  require("jsonwebtoken");
//route for customer registration 
router.post("/customer/register", function (req, res) {
    const username = req.body.username;
    User.findOne({ username: username }).then(function (customerData) {
        //if the username is in the database
        if (customerData != null) {
            res.json({ message: "Username already exits!" })
            return;
        }
    })

    //now it means we are ready for registration

    const password = req.body.password;
    bcryptjs.hash(password, 10, function (e, hashed_pw) {
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const email = req.body.email;
        const phone=req.body.phone;
      
        
        
      
        const cdata = new User({
            username: username,
            password: hashed_pw,
            firstname: firstname,
            lastname: lastname,
           phone:phone,
            email: email,
           
            isAdmin:false,
            // product_image: req.file.filename
        })
        cdata.save()
            .then(function () { res.json({ message: "Registered Success!" }) })
            .catch(function (e) { res.json(e) })
    })
})













module.exports = router;