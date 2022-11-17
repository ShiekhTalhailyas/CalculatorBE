const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// CORS
var cors = require("cors");
app.use(cors());

// parse application/json
app.use(bodyParser.json());

const PORT = 5000;

app.post("/calculate/add", (req, res) => {
  console.log(req.body);
  const { Number1, Number2 } = req.body;
  const result = Number1 + Number2;
  res.status(200).json(result);
});

app.post("/calculate/subtract", (req, res) => {
  const { Number1, Number2 } = req.body;
  const result = Number1 - Number2;
  res.status(200).json(result);
});

app.post("/calculate/multiply", (req, res) => {
  const { Number1, Number2 } = req.body;
  const result = Number1 * Number2;
  res.status(200).json(result);
});

app.get("/", (req, res) => {
  res.send("Server is Running");
});

app.listen(PORT, () => console.log(`Port ${PORT} is listening`));
