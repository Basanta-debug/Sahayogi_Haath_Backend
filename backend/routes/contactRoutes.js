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


router.get("/contact/details", function (req, res) {
  const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;
    
  //make userid in product model

  Contact.find(name, email, subject, message)
    .then(function (result) {
      res.json(result);
      console.log(result);
    })

    .catch(function () {
      res.json({ msg: "something went wrong" });
    });
});



 pdt
      .save()
      .then(function () {
        res.json({ msg: "Contact added!!" });
      })

      .catch(function () {
        res.json({ msg: "Something went wrong!" });
      });





module.exports = router;
