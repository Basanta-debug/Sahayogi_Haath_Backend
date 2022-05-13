const jsonwebtoken = require('jsonwebtoken');
const Customer = require('../models/userModel')



module.exports.verifyCustomer = function (req, res, next) {
    
    try{
    const token = req.headers.authorization.split(" ")[1];
    console.log("token", token)
    const data = jsonwebtoken.verify(token, "anysecretkey");


    console.log(data);
    Customer.findOne({ _id: data.cusId }).then(function (result) {
        // console.log(result);
        req.customerInfo= result;
        next();
    })
    .catch(function(e){
        res.json({error:e})
    })
}
    catch(e){
        res.json({error:'Invalid Access'})
    }




}
