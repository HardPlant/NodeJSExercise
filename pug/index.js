const express = require('express');
const app = express();
const path = require("path");
app.set('view engine', 'pug');
app.use('/views/scripts',express.static(__dirname + '/views/scripts'));
app.get('/', function(req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!' });
});
app.get('/bdgAdd', function(req, res) {
    res.render('bdgAddPage');
});
app.get('/admin', function(req, res) {
    res.render('adminPage');
});
app.get('/failed', function(req, res) {
    res.render('failedPage');
});
app.get('/suggest', function(req, res) {
    res.render('suggestPage');
});
app.get('/views/scripts/suggest.js',function(req,res){
    res.sendFile(path.join(__dirname+'/views/scripts/suggest.js'));
});
app.get('/search', function(req, res) {
    res.render('searchPage');
});
app.get('/bdg',function(req,res){
    res.json({
    "id": "",
    "BdgName": "",
    "NearBuilding": {
        //BuildingInfo* next;
    },
    "GPS": {
        "latitute": 1234.56,
        "longititute": 1234.56
    },
    "imagePath": "/image/path"
    });
});
app.listen(433, function() {
    console.log('server');
});