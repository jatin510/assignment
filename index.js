const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const app = express();
const server = http.Server(app);
const io = socketio(server);
const path = require("path");

var status_value = "off";

io.on("connection", (socket) => {
  socket.send("");
  socket.on("check", (data) => {
    console.log();
  });

  // socket set
  socket.on("set", (data) => {
    console.log("The status of IOT device is set to  ", data);
    status_value = data;
  });

  socket.on("check", () => {
    console.log("The status of the IOT device is :", status_value);
  });
});

app.use(express.static(path.join(__dirname, "public")));
// app.get("/", (req, res) => res.send("hello"));

server.listen(3000, () => {
  console.log("connected, http://locahost:3000");
});
