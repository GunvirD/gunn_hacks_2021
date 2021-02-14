const express = require('express');
var app = express();
// css location:
app.use(express.static(__dirname + '/public'));


app.get("/", function(req, res){
  res.sendFile(__dirname + '/main.html');
});

app.get("/about", function(req, res){
  res.sendFile(__dirname+"/about.html")
});

app.get("/contact", function(req, res){
  res.sendFile(__dirname+"/contact.html")
});

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
app.get("/blog-000001-famous-people-that-are-saving-the-world.html", function(req, res)
{
  res.sendFile(__dirname+"/blogs/blog-000001-famous-people-that-are-saving-the-world.html");
});
app.get("/blog-000002-.html", function(req, res)
{
  res.sendFile(__dirname+"/blogs/blog-000002-.html");
});
app.get("/blog-000003-.html", function(req, res)
{
  res.sendFile(__dirname+"/blogs/blog-000003-.html");
});
app.get("/blog-000004-.html", function(req, res)
{
  res.sendFile(__dirname+"/blogs/blog-000004-.html");
});
app.get("/blog-000005-.html", function(req, res)
{
  res.sendFile(__dirname+"/blogs/blog-000005-.html");
});
app.get("/blog-000006-.html", function(req, res)
{
  res.sendFile(__dirname+"/blogs/blog-000006-.html");
});
app.get("/blog-000007-.html", function(req, res)
{
  res.sendFile(__dirname+"/blogs/blog-000007-.html");
});
app.get("/blog-000008-.html", function(req, res)
{
  res.sendFile(__dirname+"/blogs/blog-000008-.html");
});
app.get("/blog-000009-.html", function(req, res)
{
  res.sendFile(__dirname+"/blogs/blog-000009-.html");
});
app.get("/blog-000010-.html", function(req, res)
{
  res.sendFile(__dirname+"/blogs/blog-0000010-.html");
});
app.get("/blog-000011-.html", function(req, res)
{
  res.sendFile(__dirname+"/blogs/blog-0000011-.html");
});
app.get("/blog-000012-.html", function(req, res)
{
  res.sendFile(__dirname+"/blogs/blog-0000012-.html");
});
app.get("/blog-0000013-.html", function(req, res)
{
  res.sendFile(__dirname+"/blogs/blog-0000013-.html");
});
app.get("/blog-0000014-.html", function(req, res)
{
  res.sendFile(__dirname+"/blogs/blog-000014-.html");
});
app.get("/blog-0000015-.html", function(req, res)
{
  res.sendFile(__dirname+"/blogs/blog-000015-.html");
});
app.get("/blog-0000016-.html", function(req, res)
{
  res.sendFile(__dirname+"/blogs/blog-000016-.html");
});


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

app.listen(3000, function(){
  console.log("System Running on port 3000")
});
