// // $env:UV_THREADPOOL_SIZE=5 --> to change size of thread pool 


// //HTTP Server
// import http from 'node:http';

let items = [
    {id: 1, name: 'item1', price: 100},
    {id: 2, name: 'item2', price: 200},
    {id: 3, name: 'item3', price: 300},
    {id: 4, name: 'item4', price: 400},

]


// const server = http.createServer((req, res) => {
//     //console.log(req.url, req.method)
//     res.writeHead(200, {'Content-Type': 'application/json'})
//     if(req.url === '/' && req.method === 'GET'){
//         res.end(JSON.stringify(items))
//     }else if(req.url === '/' && req.method === 'POST'){
//         req.on('data', (data) => {
//             let newItem = JSON.parse(data);
//             newItem.id = items.length ? items[items.length -1].id +1 : 1;
//             items.push(newItem);
//             res.end(JSON.stringify(newItem));
//         })
//     }else if (req.url.startsWith('/') && req.method === 'PUT'){
//         console.log(req.url.split('/')[1]);
//         let id = Number(req.url.split('/')[1]);
//         // let id = +req.url.split('/')[1];
//         let item = items.find(i => i.id === id);
//         req.on('data', (data) => {
//             let updatedItem = JSON.parse(data);
//             item.name = updatedItem.name;
//             item.price = updatedItem.price;
//             res.end(JSON.stringify(items));
//         })
//     }else if (req.url.startsWith('/') && req.method === 'DELETE'){
//         let id = Number(req.url.split('/')[1]);
//         items = items.filter(i => i.id !== id);
//         res.end(JSON.stringify(items));
//   }
//     res.end('Hello from server')
// })

// server.listen(5000, ()=>{
//     console.log('Listening on port 5000....')
// })


// Express Server
import express from 'express';

const app = express();

//Middelware(beya5od ay reguest ye7awelo le json)
app.use(express.json());

app.listen(4000, ()=>{
    console.log('Listening on port 4000....')
})