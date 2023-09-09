const mongoose = require("mongoose")
require('dotenv').config({path:'.env'})
const db = process.env.DATABASE;
// mongoose.connect("mongodb://127.0.0.1:27017/React_Backend").then(console.log("database connected"))
mongoose.connect(db,{ useNewUrlParser: true }).then(console.log("database connected")).catch((err)=>{
    console.log("an error occured",err)
})