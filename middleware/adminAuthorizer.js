const jwt = require("jsonwebtoken");
const User = require("../models/dealer");
const Admin = require("../models/admin");
const morgan = require("morgan");

exports.adminAuthorizer = async (req, res, next) => {
  try {
    const url = req.originalUrl;
    console.log("inside admin auth");
    console.log(req.user._id);
    const adminDoc = await Admin.findOne({ user: req.user._id, active: true });
    if (!adminDoc) throw new Error("User is not an admin.");
    if (url && url.includes("role-admin")) {
      next();
    } else {
      res.status(200).json({ admin: true, status: 200 });
    }
  } catch (err) {
    res.status(401).json({ message: err.message, admin: false, status: 200 });
  }
};

exports.superAdminAuthorizer = async (req, res, next) => {
  try {
    const url = req.originalUrl;
    console.log(url);
    const adminDoc = await Admin.findOne({ _id: req.user._id, active: true });
    if (!adminDoc) throw new Error("User is not an admin.");
    if (!adminDoc.isSuperAdmin) throw new Error("User is not a super admin.");
    if (url && url.includes("role-superAdmin")) {
      next();
    } else {
      res.status(200).json({ superAdmin: true });
    }
  } catch (err) {
    res.status(401).json({ message: err.message, superAdmin: false });
  }
};
