var express = require("express");
const { response } = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("welcome to node");
});

app.listen(process.env.PORT || 3000);
