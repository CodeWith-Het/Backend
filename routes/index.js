var express = require('express');
var router = express.Router();
const userModel = require("./users");

router.get("/", (req, res) => {
  res.render("index");
});

// Create A JSON data qith using mongoose 
router.get('/userdata',async (req,res)=>{
  const userdata = await userModel.create({
    username: "Jeshin Patel",
    age: 21,
    name: "Jenishkumar Patel",
    pincode: 341250
  });
  res.send(userdata);
});

// This use for find data
router.get('/userdatagiven',async (req,res)=>{
  const data=await userModel.findOne({
      age: 21,
  });
  res.send(data)
});

// This is blank data because data not in the database
router.get('/userdatagiven02',async (req,res)=>{
  const data=await userModel.findOne({
      username: "Het Patel"
  });
  res.send(data)
});
module.exports = router;
