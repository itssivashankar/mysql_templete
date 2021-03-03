var express = require('express');
var app = express();
global.__root = __dirname + '/';
console.log("__root",__root);
global.__db_model = require(__root+'model');

app.get('/api',function(req,res){
  res.status(200).send("api works");
});

var UserController = require(__root+'user/UserController');
app.use('/api/user',UserController);

module.exports = app;
