
const cloudinary = require('cloudinary').v2;
require('dotenv').config()
exports.cloudinaryConnet = ()=>{
   try {        
        cloudinary.config({    
        cloud_name:process.env.CLOUD_NAME,
        cloud_api:process.env.CLOUD_API,
        cloud_secret:procss.env.CLOUD_SECRET

        })
   } catch (error) {
    
   }
}