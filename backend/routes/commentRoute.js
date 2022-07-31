const express = require("express");

const Comment = require("../models/commentModel");
const router = new express.Router();


    .then(function (result) {
      res.json(result);
      console.log(result);
    })

    .catch(function () {
      res.json({ msg: "something went wrong" });
    });
});


