
const express = require("express");
const cors = require('cors');
const cookieParser = require("cookie-parser");


//Router

const authRoute = require("./routes/auth");

const app = express();


app.use(cors());

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());

app.use("/user",authRoute);




module.exports = app;

