const express = require('express');
var app = express();

app.get("/", function(){
  app.sendFile('main.html');
});

app.listen(3000, function(){
  print("System Running on port 3000")
});
