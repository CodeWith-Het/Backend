const express = require('express');
const app = express();

app.get("/search",(req,res)=>{
    const iosQuery = req.query.ios;
    const androidQuery = req.query.android;
    res.send(`iOS Query: ${iosQuery}, Android Query: ${androidQuery}`);
});

app.listen(5001,()=>{
    console.log("Server is starting");
})
