// requiring the library
const mongoose = require("mongoose");
const dotenv = require('dotenv');

dotenv.config();
const DB = process.env.DB_URL;

//connecting to the database
mongoose.connect( DB );

// acquiring the connection to check if it is succesfull
const db = mongoose.connection;

// checking for the error
db.on("error", console.error.bind(console, "error in connecting the database"));

// up and running then print the statement
db.once("open", () => {
  console.log("succesfully connected to database");
});

// exporting the connection
module.exports = db;
