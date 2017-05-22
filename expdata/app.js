const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
var multer = require('multer');
const util = require('util');

var app = express();


app.get('/', function(req, res) {
    fs.readFile('./view/geo.html', function(error, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data, function(error) {
            console.log(error);
        });
    });
});

app.post('/upload', function(req, res) {
    var form = new multiparty.Form();
    form.parse(req, function(err, fields, files) {
        fs.readFile(files, function(err, data) {
            var filePath = __dirname + "\\files\\" + req.files.uploadFile.name;
            fs.writeFile(filePath, data, function(err) {
                if (err) {
                    throw err;
                } else {
                    res.redirect("back");
                }
            });
        });
    });
});


app.listen(3232, "localhost", function() {
    console.log("server start");
});