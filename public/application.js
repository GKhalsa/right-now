var socket = io();

socket.on('connect', function () {
  console.log('You have connected!');
  // socket.send('message', {
    // username: 'yournamehere',
    // text: 'I did the thing.'
  // });
});
socket.on('message', function (message) {
  // $('#header').html(message.text);
  $('#header').append(`<div>${message.user}: ${message.message}</div>`);
});


$('.new-message-submit').on('click', function(){
  var user = $('.new-message-user').val();
  var message = $('.new-message-message').val();
  socket.send('message', {
    user: user,
    message: message
    // user,
    // message
  });
});
