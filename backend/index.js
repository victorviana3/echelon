const express = require("express");
const app = express();
const cors = require("cors");
const port = 3001;

app.use(cors());

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.listen(port, () => {
  console.log(`Echelon backend listening on port ${port}`);
});
