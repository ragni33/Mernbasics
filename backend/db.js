const mongoose = require('mangoose');
const mongouri = 'mongodb://localhost:27017/'

const mongodb =async() =>{
    
await mongoose.connect(mongouri, { useNewUrlPasrser: true},(err,result)=>{

if (err) console.log("---", err)
else{
    console.log("connected");
}
});
}
module.exports = mongoDB;

// const { MongoClient } = require('mongodb');
