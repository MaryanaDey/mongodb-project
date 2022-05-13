// QU_jztpqp64it6N

const mongoose = require("mongoose");
const DB_HOST = "mongodb+srv://goit-nodejs:QU_jztpqp64it6N@cluster0.gllba.mongodb.net/books_reader?retryWrites=true&w=majority"

mongoose.connect(DB_HOST)
    .then(() => console.log("Database success conect"))
.catch(error => console.log(error.message))