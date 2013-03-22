var util = require('util');
var path = require('path');
var express = require('express');

var app = express();
app.configure(function(req, res, next) {
  app.use(express.static(__dirname));
});

app.listen(8101);