// const mongoose = require("mongoose");
// require("dotenv").config();
// console.log("MongoDB URI:", process.env.db);
// mongoose.connect(process.env.db).then(() => { console.log("Database connected succesfully") }).
// catch((err) => {
//     console.log("Not connected database");

// })

const mongoose = require("mongoose");
require("dotenv").config();

const mongo = async () => {
  try {
    console.log("MongoDB URI:", process.env.db);
    await mongoose.connect(process.env.db);
    console.log("Database connected successfully");
  } catch (err) {
    console.error("Not connected to the database:", err);
  }
};
mongo();
