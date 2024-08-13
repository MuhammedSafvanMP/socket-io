const express = require("express");
const http = require("http");
const socketIo  = require("socket.io");


const app = express();

const server = http.createServer(app);

const io = socketIo(server);

app.use(express.static('./public'));


io.on('connection', (socket) => {
    console.log('user connected');

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    })
    socket.on('disconnect', () => {
        console.log("user disconnected");
        
    })
    
})

server.listen(5000, () => console.log("Server is running"))