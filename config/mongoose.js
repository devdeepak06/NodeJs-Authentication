const mongoose = require("mongoose");
require("dotenv").config();
const db = 'mongodb+srv://kdeepak:oIS9cjMj9Ex3cdZ5@nodejsauth.lccqj6d.mongodb.net/'
console.log("MongoDB URI:", db);
mongoose
  .connect(db)
  .then(() => {
    console.log("database connected successfully");
  })
  .catch((error) => {
    console.error("not connected to the database", error);
  });
