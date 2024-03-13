// auth, isStudent, isAdmin

const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = (req, res, next) => {
  try {
    token = req.body.token;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "token missing.",
      });
    }

    // varify the token.
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRETE);
      console.log(payload);
      req.user = payload;
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: "token is invalid",
      });
    }
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Something went wrong while varifying token",
    });
  }
 
};

exports.isStudent = (req, res, next) => {
  try {
    if (req.user.role !== "student") {
      return res.status(401).json({
        success: false,
        message: "This is protected route for ",
      });
    }
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "user role not matching",
    });
  }
  
};
exports.isAdmin = (req, res, next) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(401).json({
        success: false,
        message: "This is protected route for Admin",
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "User role not matching",
    });
  }
};
