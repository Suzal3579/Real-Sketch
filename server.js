console.log("Sever running at port 9999");
var express = require("express");
var app = express();
var server = app.listen(9999);

app.use(express.static("public"));

var socket = require("socket.io");
var ioTrack = socket(server);

ioTrack.sockets.on("connection", (socket) => {
    console.log(socket);
});