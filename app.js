// QU_jztpqp64it6N

const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// dotenv.config();
require("dotenv").config();

const { DB_HOST } = process.env;

mongoose.connect(DB_HOST)
    .then(() => console.log("Database success conect"))
.catch(error => console.log(error.message))