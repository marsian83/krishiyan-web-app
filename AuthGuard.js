const jwt = require("jsonwebtoken");
const User = require("./models/dealer");

const AuthGuard = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, "secret");

      req.user = await User.findById(decoded.id).select("-password");
      // req.user = decoded?.sub
      next();
    } catch (err) {
      console.log(err);
      res.status(401).json({ message: err.message });
    }
  }

  if (!token) {
    res.status(401).json({ message: "Invalid Authentication." });
  }
};


module.exports = AuthGuard;
