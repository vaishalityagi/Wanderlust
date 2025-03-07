const mongoose = require("mongoose");
const Listing = require ("../models/listing.js");
const initData = require("./data.js");

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}

main().then(()=>{
    console.log("connected to db");
}).catch((err)=>{
    console.log(err);
});

const initDB = async ()=>{
    await Listing.deleteMany({}); //clean the database
    initData.data =  initData.data.map((obj)=>({
        ...obj,
        owner:"677c8abbee73ce32f6b63f59",
        
    }));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
}
initDB();