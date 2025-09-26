const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/ButtetExpressApp");


const userSchema=mongoose.Schema({
  userName: String,
  name: String,
  age: Number,
  pincode: Number
});

module.exports=mongoose.model("user",userSchema);