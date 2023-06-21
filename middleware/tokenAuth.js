const jwt = require("jsonwebtoken");
const User = require("../models/dealer");
const Admin = require("../models/admin");
// const morgan = require("morgan");

exports.tokenAuth = async (req, res, next) => {
  let token;
  try {
    // token = req.headers.authorization.split(" ")[1];
    console.log("object");
    token = req.token;
    if (!token) {
      //if no token is present
      throw new Error("User not Signed in, Sign in First.");
    }
    // morgan.logger("decoded", decoded);
    const decoded = jwt.verify(token, "secret");
    req.user = await User.findById(decoded.id);
    if (!req.user) {
      throw new Error({ message: "Invalid User" });
    }
    // req.user = decoded?.sub
    next();
  } catch (err) {
    // console.log(err);
    res.status(401).json({ message: err.message });
  }
};
