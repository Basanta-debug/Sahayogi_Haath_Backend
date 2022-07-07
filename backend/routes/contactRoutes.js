const express = require("express");

const Contact = require("../models/contactModel");
const router = new express.Router();

router.post("/contact/add",function (req, res) {
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;
   

    const pdt = new Contact({
        name: name,
        email: email,
        subject: subject,
        message: message,
      
    });

    pdt
      .save()
      .then(function () {
        res.json({ msg: "Contact added!!" });
      })

      .catch(function () {
        res.json({ msg: "Something went wrong!" });
      });
  }
);






module.exports = router;
