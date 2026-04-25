const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
    console.log("User connected");
});

server.listen(5000, () => {
    console.log("Server running on port 5000");
});