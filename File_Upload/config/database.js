const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {

  console.log(process.env.MONGODB_URL)
  mongoose.connect(process.env.MONGODB_URL,{
    
  // useNewUrlParser: "true",
  // useUnifiedTopology: "true"

  })
    .then(console.log("DB Connection Successful"))

    .catch((err) => {
      console.log("DB Connection Failed");
      console.error(err);
      process.exit(1);
    });
};
