const fs = require('fs');

const writestream = fs.createWriteStream("./Day 01/BigFile.txt");

writestream.write("Hello dosto lo fir aa gaya me pandu bawachir\n");
writestream.write("Kar deta hu loko ki kachhi\n");
writestream.write("**** teri production ki");
writestream.end("Finishing writeing content");

writestream.on('finish', ()=>{
    console.log("Finishing the write content in file.....");
});

writestream.on('error',(errors) =>{
    console.log("Given me errors",errors)
});