// const calculator = require('./calc');
// const path = require('path');
// const myOs = require('os');
// const fs = require('fs');

const EventEmitter = require ('events');

const myEvent = new EventEmitter();

myEvent.on ('allo' , function() {
    console.log('salam chenwa 7ewalik labess hamdouallh')
})

myEvent.emit('allo'); 

// const files = fs.readdir('../', (err, files) => {
//     if (err)  {
//         console.error('error' , err)
//     } else {

//         console.log(files)
//     }
// });

// console.log(files)
// console.log(calculator.sub (40,4))
// console.log(calculator.add (40,5))
// console.log(calculator.multi (40,4))
// console.log(calculator.div (40,5))

// console.log(path.parse(__filename).name);
// console.log(__dirname);

// console.log(myOs.cpus())

let totalMemory = myOs.totalmem();
let freeMemory = myOs.freemem();

// console.log (`Total memory is : ${ totalMemory } - Free Memory is : ${ freeMemory }`)