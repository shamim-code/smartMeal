
const Joi = require('joi');

const userSchema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(5).max(30).required(),
    phone: Joi.string().min(11).max(11).required(),
    address: Joi.string().required(),
})


module.exports = userSchema;