const WebSocket = require("ws");
const server = new WebSocket.Server({ port: 3000 });

server.on("connection", (socket) => {
  console.log("Client connected!");

  socket.on("message", (data) => {
    console.log(data.toString());
  });

  socket.send("Hello from server!");
});
