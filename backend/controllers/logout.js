
const jwt = require("jsonwebtoken");

const logout = (req,res) => {

    const cookie = req.cookies;
    res.clearCookie("loginToken");

    res.send({status: "success", msg: "Logout successfully"});
}

module.exports = logout;