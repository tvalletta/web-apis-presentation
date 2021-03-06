var express = require('express');
var app = express(),
    http = require('http'),
    server = http.createServer(app),
    io = require('socket.io').listen(server);

server.listen(process.env.VCAP_APP_PORT || 3001);


//app.configure(function(){
//    app.use(express.bodyParser());
//});


app.use("/", express.static(__dirname + '/static'));


io.sockets.on('connection', function (socket) {
    socket.emit('connection', {});

    socket.on('message', function(msg){
        console.log('message', msg);
        socket.broadcast.emit('msg', msg);
    });

    socket.on('remote value', function(data) {
		socket.broadcast.emit('remote', data);
    });
});