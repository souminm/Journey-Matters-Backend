const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const db = require("./Config/db.js")
const mongoose = require("mongoose")
const post_route = require('./Routes/postRoute.js');
require('dotenv').config({path:'.env'})
const port = process.env.PORT || 5000;

const app = express();

app.use(cors({ origin: true }));
app.use(bodyParser.json());
app.use('/api',post_route);

app.listen(port,()=>{
    console.log(`server started at port no ${port}`)
})