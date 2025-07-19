// Backend server with Socket.io
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const cors = require('cors');

const app = express();
app.use(cors());
const server = http.createServer(app);

const io = socketIO(server, { 
  cors: { origin: "*" } 
});

// Track connected farmers
const farmers = {};

io.on('connection', (socket) => {
  console.log('New farmer connected:', socket.id);
  
  socket.on('join', (data) => {
    farmers[socket.id] = data.name;
    io.emit('message', `${data.name} joined the market`);
  });

  socket.on('priceUpdate', (data) => {
    io.emit('message', `Price update: ${data.crop} at KSh ${data.price}/kg`);
  });

  socket.on('disconnect', () => {
    io.emit('message', `${farmers[socket.id]} left the market`);
    delete farmers[socket.id];
  });
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
