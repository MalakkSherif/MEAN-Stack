//common js module
// const os = require('node:os');
// const logger = require('./logger');

// logger.hello("malak");

// console.log(os.homedir())

//ecma script module
// import os from 'node:os';  // --> console.log(os.homedir())
// import { hello } from './logger.js'; // --> hello("malak");
// import * as logger from './logger.js'; // --> logger.hello("malak");
// logger.hello("malak");
// logger.greet("malak");

// // Task 3
// import * as calc from './calculator.js';
// console.log(calc.add(2, 3));
// console.log(calc.subtract(5, 2));
// console.log(calc.multiply(4, 3));
// console.log(calc.divide(10, 2));
// console.log(calc.divide(10, 0));


import fs from 'node:fs';
import _ from 'lodash';

// //Read file

// //mesh hatwa2af el code 3andaha(async non-blocking)
// fs.readFile('./session2/hello.txt', 'utf-8', (err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Read Async " + data)
//     }

// })

// //hatwa2af el code 3andaha(sync blocking)
// let filecontent = fs.readFileSync('./session2/hello.txt', 'utf-8');
// console.log("Read Sync " + filecontent);


// //write file

// //Async non-blocking
// fs.writeFile('./session2/users.json', JSON.stringify([{id:1,name:"malak"},{id:2,name:"sherif"}]), (err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Write Async");
//     }
// })

// //Sync blocking
// fs.writeFileSync('./session2/users2.json', 'hello everyone from sync');


// //delete file

// //Async blocking
// fs.unlink('./session2/users2.json', (err)=>{
//     if(err){
//         console.log(err);
//     }else{
//        console.log("Delete Async")
//     }
// })


// //Task 4
// fs.writeFileSync("./session2/notes.txt", "hello notes, this is my first note")

// fs.readFile("./session2/notes.txt", "utf-8", (err,data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("notes content: " + data)
//     }
// })

// let readStream = fs.createReadStream('./session2/hello.txt', {encoding: 'utf-8', highWaterMark: 16*1024}); 

// let writeStream = fs.createWriteStream("./session2/writestream.txt");
// readStream.on('data', (chunk)=>{
//     console.log(chunk.length);
//     console.log('\n ***************chunk*************** \n' + chunk);
//     writeStream.write(chunk);
// })


// //Task 5
// let  text;
// for (let i=0; i<1000; i++){
//      text+="hello world ";
// }
// fs.writeFileSync("./session2/hello.txt", "hello world"+text)

let readStream = fs.createReadStream('./session2/hello.txt', {encoding: 'utf-8', highWaterMark: 3*1024})

let writeStream = fs.createWriteStream('./session2/writeStream.txt')

readStream.on('data', chunk=>{
    writeStream.write('\n ***************chunk*************** \n' + chunk)
})
