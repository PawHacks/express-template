const express = require("express");

const app = express();
app.use(express.static(__dirname + "/public"));
app.use(express.json());

app.get("/", (req, res) => { res.sendFile(__dirname + "/index.html"); });

app.get("/random", (req, res) => {
  const randomNumber = Math.random();
  console.log("User requested a random number, sending", randomNumber);
  res.json({ number: randomNumber });
});

app.post("/sendtext", (req, res) => {
  console.log("User sent a text message", req.body);
  const data = req.body;
  console.log("User sent:", data);
  res.json({ "Data received": data.text? data.text : "No text sent"});
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
