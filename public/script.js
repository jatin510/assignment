var socket = io();

// $(".set").click(() => {
//   var value = $("#set-select").find(":selected").text();
//   socket.emit("set", value);
// });

$("#set-status").click(() => {
  var value = $("#set-select").find(":selected").text();
  socket.emit("set", value);
});

$("#check-status").click(() => {
  console.log("clciked");
  socket.emit("check");
});
