const mongoose = require("mongoose")
require('dotenv').config();


mongoose.connect(process.env.DB_URI).then(console.log("db connceted")).catch((err)=>{
    console.log(err)
})

const newschema = new mongoose.Schema({
   name:{
    type:String,
    required:[true,'must provide name'],
    trim:true,
    maxlength:[40,'name canot be more than 40 character']
   },
   completed:{
    type:Boolean,
    default:false
   }
})
const newcollections = mongoose.model("taskmanagment",newschema)
module.exports= newcollections