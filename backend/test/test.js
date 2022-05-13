// use the path of your model
const User = require('../models/userModel');
const mongoose = require('mongoose');
// use the new name of the database
const url = 'mongodb://localhost:27017/Sahayogi_Haath';
beforeAll(async () => {
 await mongoose.connect(url, {
 useNewUrlParser: true,
 useUnifiedTopology : true
 });
});
afterAll(async () => {
 await mongoose.connection.close();
});

describe('Customer  Update test success', () => {
//the code below is for insert testing
 it('Customer Logged in', () => {
 const customer = {
 'username': 'idkpro',
 'password': '12345',
 'firstname':"basanta",
 'lastname':'banjara',
 'email':'banjarabasanta123@gmail.com'
 };
 
 return Customer.create(customer)
 .then((pro_ret) => {
 expect(pro_ret.username).toEqual('idkpro');
 });
 });


 
})
