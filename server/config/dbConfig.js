require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://admin:${process.env['mongodb']}@cluster0.qu48xlt.mongodb.net/DAuction?retryWrites=true&w=majority`);


const db = mongoose.connection;

db.on("connected",()=>{
        console.log("MongoDb connected successfully");
});

db.on("error",()=>{
    console.log("MongoDb Connection Failed");
});

//