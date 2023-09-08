// Purpose: To connect to the database using mongoose. 
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
