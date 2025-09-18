const express =  require('express');
const app = express();

app.use((req,res,next)=>{
   next(); 
});

app.get("/",(req,res)=>{
    res.send("Hello Dosto Sikhate hai hum Express js ki recipe");
});

app.get("/profile/:username",(req,res)=>{
    res.send(`This is profile section ${req.params.username}`);    
});

app.listen(3000,()=>{
    console.log("Server is running in 3000 port");
});