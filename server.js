var express = require("express"),
  app = express(),
  cors = require("cors");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bodyParser = require("body-parser");
mongoose.connect("mongodb://localhost:27017/reactusers");
require("./models/users.js");
const User = mongoose.model("users");
app.use(
  cors({
    origin: "http://localhost:3000"
  })
);

app.get("/getusers", function(req, res) {
  User.find().then(function(data) {
    res.send(data);
  });
});

app.get("/deleteusers/:username", function(req, res) {
  User.find({ username: req.params.username })
    .remove()
    .then(data => {
      res.send(data);
    });
});

app.get("/createuser/:username/:location", function(req, res) {
  var newUser = new User({
    username: req.params.username,
    location: req.params.location
  });
  newUser.save().then(user => {
    res.send(user);
  });
});

app.listen(4000, function() {
  console.log("server running @ localhost:4000");
});
