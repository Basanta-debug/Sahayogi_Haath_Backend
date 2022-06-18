const express = require("express");

const Comment = require("../models/commentModel");
const router = new express.Router();

router.post("/comment/add", function (req, res) {
  const text = req.body.text;
  const cook = req.body.cook;
  const user = req.body.user;
  const rating = req.body.rating;

  const pdt = new Comment({
    text: text,
    cook: cook,
    user: user,
    rating: rating,
  });

  pdt
    .save()
    .then(function () {
      res.json({ msg: "Comment added!!" });
    })

    .catch(function () {
      res.json({ msg: "Something went wrong!" });
    });
});


// router.put("/like/:id"), function(req,res){

//   const id = req.params.id;
//   const like=req.body;
//   console.log(id)

//   Comment.findByIdAndUpdate( {_id:id} ,{like:like},function(err,docs){
//     if (!err){

//         res.json({msg: "update successfully!" , success: true })
//     }
//     else{
//         res.json({msg: err , success: true })
//     }

// })

// }


module.exports = router;
