// app creation
const express = require('express');
const app = express();

// find PORT
require('dotenv').config();
const PORT = process.env.PORT || 4000

// add Middleware
app.use(express.json());
const fileupload = require('express-fileupload');
app.use(fileupload());

// connect to db
const db = require('./config/database');
db.connect();

// connect to cloudinary
const cloudinary = require('./config/cloudinary');
cloudinary.cloudinaryConnet();
// api mount
const Upload = require('./routes/FileUpload');
app.use('api/v1/upload', Upload);

// activate server
app.listen(PORT, ()=>{
    console.log(`server running at ${PORT}`)
})
