
const express = require('express')
const router = express.Router();

const {login, signup} = require("../Controllers/Auth");
const {auth, isStudent, isAdmin} = require("../middlewares/auth")

router.post('/login', login);
router.post('/signup', signup);

// testing protected route for single middleware.
    router.get('/test', auth, (req,res)=>{
        res.json({
            success:true,
            message:'Welcome to the protected route for the test'
        })
    });

// protected route.
    router.get('/student', auth, isStudent, (req,res)=>{
        res.json({
            success:true,
            message:'Welcome the protected router for the student'
        })
    });

    router.get('/admin', auth, isAdmin, (req,res)=>{
        res.json({
            success:true,
            message:'Welcome to the protected route for the admin'
        })
    });


module.exports = router;
