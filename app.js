//jshint esversion:6

const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;
const futurama = require("./futuramaQuotes");

console.log(futurama.newQuote());

app.get('/futurama-quote', function (req, res) {
  let quote = futurama.newQuote();
  res.send(quote);
});

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
   res.sendFile(path.join(__dirname, 'build', 'index.html'));
 });

app.listen(port, function(){
  console.log(`Server is running on port ${port}`);
});
