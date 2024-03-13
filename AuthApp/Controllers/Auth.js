const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// signup route handler.
exports.signup = async (req, res) => {
  try {
    //get data
    const { name, email, password, role } = req.body;

    //chekc if user is already exists.
    const existingUser = await User.findOne({ email });

    // if user exist.
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    // password incryption.
    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(password, 10);
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Error in hashing password",
      });
    }
    // create entry for new user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    return res.status(200).json({
      success: true,
      data: user,
      message: "user created successfully",
    });
  } catch (error) {
    console.log(error);
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong please try after some time",
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if(!email || !password)
    {
        return res.status(400).json({
            success:false,
            message : "Please fill all the details carefully",
        })
    }
        // check for register user 
        let user = await User.findOne({email});
        if(!user)
        {
            return res.status(401).json({
                success : false,
                message : "User does not exist",
            });
        }
    
    const payload = {
      email: user.email,
      id: user._id,
      role: user.role,
    };

    // verify password and generate JWT_TOKEN
    if (await bcrypt.compare(password, user.password)) {
      let token = jwt.sign(payload, process.env.JWT_SECRETE, {
        expiresIn: "2hr",
      });
      user = user.toObject();
      user.token = token;
      user.password = undefined;

      const options = {
        expires : new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly : true,
    }


       res.cookie("token",token,options).status(200).json({
                success : true,
                token,
                user,
                message:"User logged in successfully"
            });

    } else {
      return res.status(400).json({
        success: false,
        message: "password not matched",
      });
    }
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};
