const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const path = require('path');

app.use(express.static('public'));

app.get('/', function (req, res){
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

io.on('connection', function (socket) {
  // var i = 0;
  // var interval = setInterval(function () {
  //   i++;
  //   socket.emit('message', {user: 'turingbot', text: 'I am a banana.'+i});
  // }, 1000);

  socket.on('message', function (channel, message) {
    // send the message out to everyone.
    // socket.emit('message', message);
    io.sockets.emit('message', message);
    console.log(channel + ':', message);
  });

  socket.on('disconnect', function () {
    //anounce when someone disconnects
    // clearInterval(interval);
  });
});

http.listen(process.env.PORT || 3000, function(){
  console.log('Your server is up and running on Port 3000. Good job!');
});
