const userModel = require("../models/userModel");
const userSchema = require("../validationSchema/uservalidation");


const registration = async (req, res) => {
    try {


        // Validate the request body using Joi schema
        const { error, value } = userSchema.validate(req.body, { abortEarly: false });


        if (error) {
            return res.status(400).json({ error: "Validation error", message: error.message });
        }

        const { username, password, email, phone, address } = req.body;

        // Check if email already exists
        const findEmail = await userModel.findOne({ email: email });
        if (findEmail) {
            return res.status(400).json({ message: "Email already exists" });
        }

        // Check if phone number already exists
        const findPhone = await userModel.findOne({ phone: phone });
        if (findPhone) {
            return res.status(400).json({ message: "Phone number already exists" });
        }

        // Create a new user
        const newUser = new userModel({
            username: username,
            password: password,
            email: email,
            phone: phone,
            address: address
        });

        // Save the new user to the database
        await newUser.save();

        // Respond with success
        res.status(200).json({
            status: "success",
            message: "User registered successfully",
            data: newUser
        });

    } catch (error) {
        res.status(400).json({
            status: "error",
            message: error.message
        });
    }
}

module.exports = registration;
