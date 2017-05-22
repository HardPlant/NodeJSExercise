var express = require('express');
var app = express();
var msghandler = require('./messagehandler.js');

app.get('/', function(req, res) {
    res.send('hello world');
});
app.get('/keyboard', function(req, res) {
    res.end();
});
app.post('/message', msghandler.responseMaker(req, res));