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

router.get("/comment/details/:id", function (req, res) {
  const text = req.body.text;

  //make userid in product model

  Comment.find({ cook: req.params.id })
    .populate("user")
    .then(function (result) {
      res.json(result);
      console.log(result);
    })

    .catch(function () {
      res.json({ msg: "something went wrong" });
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

router.put("/comment/like/:id", function (req, res) {
  const id = req.params.id;

  Comment.findOne(
    { _id: id },(err,doc)=>{
      console.log(req.body.userid)
      for(let i in doc.like){
        if(doc.like[i].like !== req.body.userid){
          doc.like.push(req.body)
            doc.save()
            return res.json('liked')
        }else if(doc.like === '')
{
  doc.like.push(req.body)
  doc.save()
  return res.json('liked')

}        
        else{
          return res.json("lol")
        }
      }
    })
  })

module.exports = router;
