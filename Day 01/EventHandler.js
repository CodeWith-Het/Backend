! Example 1
const EventEmitter = require('events');

const emitter  = new EventEmitter();
const form = (fullname,age,DOB) =>{
    console.log(`full name: ${fullname}, age: ${age}, DOB: ${DOB}`);
    emitter.emit('formFilled',fullname,age,DOB);
}
module.exports = {emitter,form};

! Example 2
const EventEmitter = require('events');
const emt = new EventEmitter();

const message = (msg) =>{
    console.log(`Message: ${msg}`);
    emt.emit("message sent",msg);
}

module.exports = {emt,message};