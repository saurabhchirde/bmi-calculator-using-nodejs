const express = require("express");
const bodyPraser = require("body-parser");

const app = express();

app.use(bodyPraser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var ht = req.body.ht;
  var wt = req.body.wt;
  var bmi = (wt / ht / ht) * 10000;

  res.send("Your BMI is :" + bmi);
});

app.listen(3000, function () {
  console.log("Server is started on port 3000");
});
