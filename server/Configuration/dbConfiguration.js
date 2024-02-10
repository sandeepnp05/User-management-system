const mongoose = require("mongoose");
require("dotenv").config();

module.exports = {
    dbconnect: () => {
      mongoose
        .connect(process.env.MONGODB_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        })
        .then(() => {
          console.log("DB connected");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  };