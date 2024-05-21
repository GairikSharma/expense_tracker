const mongoose = require("mongoose");

DB_URL =
  "mongodb+srv://gairiksharma:Gairik%40Db%401903@cluster0.i3f9lui.mongodb.net/";

async function connectToDb() {
  try {
    await mongoose.connect(DB_URL);
    console.log("Database Connected");
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectToDb;
