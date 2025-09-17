const fs = require('fs');

const readstream = fs.createReadStream('./Day 01/BigFile.txt','utf-8');

readstream.on('data',(chunk)=>{
    console.log('New chunk received:');
    console.log(chunk);
});

readstream.on('end',()=>{
    console.log("End the reading")
});

readstream.on('error',(errors)=>{
    console.log("This is a error",errors);
});