var connect = require('connect');
var socketio = require('socket.io');
var fs = require('fs');
var http = require('http');

var seats = [
    [1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1],
];
var app = connect();
app.use('/', function(request, response, next) {
    fs.readFile('HTMLPage.html', function(error, data) {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(data);
    });
});
app.use('/seats', function(request, response, next) {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(seats));
});
server = http.createServer(app).listen(80);
console.log("Server:80");

var io = socketio.listen(server);
io.sockets.on('connection', function(socket) {
    socket.on('reserve', function(data) {
        seats[data.y][data.x] = 2;
        io.sockets.emit('reserve', data);
    });
});