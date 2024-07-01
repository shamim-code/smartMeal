const login = require("../controllers/loginController");
const logout = require("../controllers/logout");
const registration = require("../controllers/registerController");

const authRoute = require("express").Router();


authRoute.post("/registration",registration);
authRoute.post("/login", login)
authRoute.get("/logout", logout);


module.exports = authRoute;