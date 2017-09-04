var express = require('express');
var bodyParser = require('body-parser');
const path = require('path');

//DB dependencies
var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/3nadhDB";

var app = express();

//parsing setting
app.use(bodyParser.json()); //aplication/json
app.use(bodyParser.urlencoded({ extended: false })); //www-form-urlencoded

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Creating Server & listening on port '3000'
app.listen(3000, function() {
    console.log('App listening on port 3000!');
});


/*DB*/
//Run this initially to create DB, Collection; Insert Document
/*MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myobj = { name: "3nadh Company Ltd", address: "Highway 37" };
  db.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});*/

// 'get' request from Browser(A2)
app.get('/getIt/:name', (req, res) => { 
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    db.collection("customers").findOne({"name": req.params.name}, function(err, result) {
      if (err) throw err;
      console.log("Response: " + result.address);
      res.send(result);         //send response to Browser
      db.close();
    });
  });
});