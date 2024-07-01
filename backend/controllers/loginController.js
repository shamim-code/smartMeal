const userModel = require("../models/userModel");


const jwt = require("jsonwebtoken");

const login = (req, res) => {

    try {

        const {email, password} = req.body;

        const findUser = userModel.findOne({email: email});
        const findPassword = userModel.findOne({password: password});

        if(findUser){
            if(findPassword){
                const token = jwt.sign({ email: req.body.email, password: req.body.password}, "secretKey", {expiresIn: '1h',algorithm: "HS512"});
                res.cookie("loginToken",token).send({status: "success", msg: "user is now signed in"});
            }
        }
        
    } catch (error) {
        
        res.status(400).send({status: "error", msg: error.message});
    }
};

module.exports = login;