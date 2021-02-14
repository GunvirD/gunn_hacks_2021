const express = require('express');
var app = express();

// css location:
app.use(express.static(__dirname + '/public'));


app.get("/", function(req, res){
  res.sendFile(__dirname + '/main.html');
});

app.listen(3000, function(){
  console.log("System Running on port 3000")
});
