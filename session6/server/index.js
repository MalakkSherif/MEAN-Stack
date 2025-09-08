
const express = require('express')
const { Server} = require('socket.io')
const http = require('node:http')
const {join} = require('node:path')
const cors = require('cors')
const app = express();

app.use(cors())
const server = http.createServer(app)
const io = new Server(server,{
    cors:{
        origin: 'http://127.0.0.1:5500'
    }
})

// app.get('/',(req,res)=>{
//     res.sendFile(join(__dirname,'index.html'))
// })

let usersOnline = {};

io.on('connection', (socket) => {
  console.log('User connected with id: ', socket.id);

  // Add user when they connect
  usersOnline[socket.id] = true;
  io.emit('online-users', Object.keys(usersOnline));

  socket.on('message', (msg) => {
    console.log('message:', msg);
    io.emit('sendToAll', msg);
  });

  socket.on('Typing', () => {
    socket.broadcast.emit('show-typing');
  });

  socket.on('stop-typing', () => {
    socket.broadcast.emit('stop-showing-typing');
  });

  socket.on('disconnect', () => {
    console.log('User with id ', socket.id, ' disconnected');

    // Remove user only when they disconnect
    delete usersOnline[socket.id];
    io.emit('online-users', Object.keys(usersOnline));
  });
});





server.listen(2000,()=>{
    console.log('Listening on port 2000...')
})