const express =  require('express');
const path = require('path');
const app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/image01',(req,res)=>{
    res.render("index01");
});

app.get('/image02',(req,res)=>{
    res.render("index02");
});

app.listen(5001,()=>{
    console.log("Server is starting");
});