import * as us from './UpperCaseModule.js';
import fs from 'node:fs';


// let text;
// for(let i=0; i<1000; i++){
//     text+="Hello World, I am malak sherif and this is my sixth task in node js. ";
// }
// fs.writeFile('./session2/Task6/readStream.txt', 'hello world'+text, (err)=>{});


let readStream = fs.createReadStream('./session2/Task6/readStream.txt', {encoding: 'utf-8', highWaterMark: 4*1024});

let writeStream = fs.createWriteStream('./session2/Task6/writeStream.txt');

readStream.on('data', (chunk)=>{
    writeStream.write("\n *************This is chunck************* \n"+us.toUpperCase(chunk));
})