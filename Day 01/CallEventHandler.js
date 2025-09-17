! Example 1
const {emitter,form} = require('./EventHandler');

emitter.on('formFilled',(fullname,age,DOB)=>{
    console.log(`Event received: Form filled with Name: ${fullname}, Age: ${age}, DOB: ${DOB}`);
});

form('Het Patel',20,'08/04/1854');

! Example 2
const {emt,message} = require('./EventHandler');

emt.on("message sent",(msg)=>{
    console.log(`Message sent is (${msg})`);
});

message("Carry bhai: TO kaisa ho aap lok");