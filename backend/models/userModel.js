
const mongoose = require('mongoose');

const Joi = require('joi');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    address:{
        type: String,
        default: "",
    }
},{timestamps: true, versionKey:false})


const userModel = mongoose.model("users", userSchema);


module.exports = userModel;