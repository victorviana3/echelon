const express = require("express");
const app = express();
const port = 3000;

app.get("/ping", (req, res) => {
  res.send("Pong!");
});

app.listen(port, () => {
  console.log(`Echelon listening on port ${port}`);
});
