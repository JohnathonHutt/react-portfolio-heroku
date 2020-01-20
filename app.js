//jshint esversion:6

//dependencies
const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");

//set port
const port = process.env.PORT || 5000;

//import futurama quotes
const futurama = require("./futuramaQuotes");

//console.log(futurama.newQuote());

//use cors
app.use(cors());

//allow OPTIONS on all resources
app.options('*', cors());

//futurama api route
app.get('/futurama', function (req, res) {
  res.send(futurama.newQuote());
});

//react routes
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
   res.sendFile(path.join(__dirname, 'build', 'index.html'));
 });

app.listen(port, function(){
  console.log(`Server is running on port ${port}`);
});
