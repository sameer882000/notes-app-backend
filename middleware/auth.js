const jwt = require("jsonwebtoken");
const jwtSecret = "samplejwtsecret";
const User = require("../models/user");

const auth = async (req, res, next) => {
  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.user = await User.findById(decoded.id).select('-password');
     console.log("Authenticated User ID:", req.user.id); 
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ msg: "Token is not valid" });
  }
}

module.exports = auth;
