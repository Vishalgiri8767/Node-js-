const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 4000;

app.use(express.json());

require('./config/database').connect();

// route import and mount
const user = require("./routes/user");
app.use("/api/v1", user);

const login = require("./routes/login");
app.use("/api/v1", login);

app.use("/",(req,res)=>{
    res.send("Hello this is homepage");
})

// activate
app.listen(PORT,()=>{
    console.log(`App is listening at ${PORT}`);
})
