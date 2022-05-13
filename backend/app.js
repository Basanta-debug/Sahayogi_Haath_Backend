const exp = require("constants");
const express = require("express");
const app = express();



const cors= require('cors');
app.use(cors());


//to use the  the image 
app.use(express.static(__dirname + '/user_images'));

app.use(express.json());
app.use(express.urlencoded({extended : true}));

require("./database/db");
const customerRoute = require("./routes/customerRoute");
const profileroute = require("./routes/profileRoute");
app.use(customerRoute);
app.use(profileroute);

app.listen("180");