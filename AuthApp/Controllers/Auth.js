const bcrypt = require('bcrypt');
const User = require('../models/User');

// signup route handler.
exports.signup = async(req,res)=>{
    try {
        //get data
        const {name, email, password, role} = req.body;

        //chekc if user is already exists.
        const existingUser = await User.findOne({email});

        // if user exist.
        if(existingUser){
           return res.status(400).json({
            success: false,
            message:'User already exists'
           })
        }

        // password incryption.
        let hashedPassword;
        try {
            hashedPassword = await bcrypt.hash(password, 10);
        } catch (error) {
            return res.status(500).json({
                success: false,
                message:'Error in hashing password'
            })
        };

        // create entry for new user.

        const user = await User.create({
            name,email,password:hashedPassword ,role
        })

        return res.status(200).json({
            success:true,
            data:user,
            message:'user created successfully'
        })

    } catch (error) {
        console.log(error)
        console.error(error)
        return res.status(500).json({
            success:false,
            message:'Something went wrong please try after some time'
        })
    }
}