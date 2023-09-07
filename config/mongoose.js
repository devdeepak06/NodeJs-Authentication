const mongoose = require("mongoose");
require("dotenv").config();
const db =
  "mongodb+srv://kdeepak:oIS9cjMj9Ex3cdZ5@nodejsauth.lccqj6d.mongodb.net/";
console.log("MongoDB URI:", db);

// dotenv.config();
// console.log(process.env.db);
mongoose
  //   .connect(process.env.db)
  .connect(db)
  .then(() => {
    console.log("database conected successfully");
  })
  .catch((error) => {
    console.log("not connected database");
  });
