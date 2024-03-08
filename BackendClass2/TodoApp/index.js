const express = require('express');
const app = express();

// load config from .env file.
require('dotenv').config();
const PORT = process.env.PORT || 4000;

// middleware to parse request body.
app.use(express.json());

// import route for TODO API
const todoRoutes = require('./routes/todos');

// mount the todo api route
app.use("/api/v1",todoRoutes);

//start server
app.listen(PORT, ()=>{
    console.log(`server started successfully at port ${PORT}`)
});

// connect to database.
const dbConnect = require('./config/database');
dbConnect();

// define default route

app.get("/",(req,res)=>{
    res.send(`<H1>This is Homepage...</H1>`)
})