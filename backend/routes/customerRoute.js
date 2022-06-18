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



router.post("/customer/login",function(req,res){
    const username = req.body.username;

    //select * from patient where username = "admin"
    User.findOne({username : username})
    .then(function(customerData){

        // console.log(patientData);
        if (customerData === null){
            return res.json({message : "invalid"})

        }

        //need to check password

        const password = req.body.password;
        bcryptjs.compare(password,customerData.password, function(e, result){
            //true - correct pw, false = incorrect pw
            if (result===false){
                return res.json({message: "inavalid"});
            }

            //ticket generate - jsonwebtoken

            const token = jwt.sign({cusId : customerData._id}, "anysecretkey");
            res.json({token: token, message: "success", 'username': req.body.username});

        })


        

    })
})


router.post("/emailcheck",function(req, res){
    if(!req.body.email){
        res.json({ msg: "Email doestnot wrong" });
    }
    else{
        
        const email=req.body.email
        User.findOne({email:email})
            .then(function (result) {
                res.json(result);
                console.log(result);
              }
        )
        .catch(
            console.log('email not exist')
        )
    }
})



router.put("/updatepassword",function(req, res){
    
    if(!req.body.email){
        res.json({ msg: "Email wrong" });
    }
    else{
       
        const email=req.body.email
        bcryptjs.hash(req.body.password, 10, function (e, hashed_pw){
            User.findOneAndUpdate({email:email},{password:hashed_pw})
            .then(function (result) {
                res.json(result);
                console.log(result);
              }
        )
        .catch(
            console.log('email not exist')
        )

        })
        
    }
})


router.put('/changepassword/:id',async(req,res)=>{
    const userData = await User.findOne({_id:req.params.id})
    const comparPass = await bcryptjs.compare(req.body.currentpassword,userData.password);
    if(!comparPass){
      res.json("curent password not match")
    }else{
        if(req.body.newpassword === req.body.password){
            bcryptjs.hash(req.body.password,10, function(e,hasPass){
                 User.findOneAndUpdate({_id:req.params.id},{
                    password:hasPass
                },{new:true}).then(data=>{

                    res.json('passwod chnged sucessfully')
                }).catch(e=>{
                    res.json(e)
                })
            })
        }
    }
})




module.exports = router;