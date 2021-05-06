
/**
 * Module dependencies.
 */

const express = require('express');

const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html")
});

app.get("/ez-audit", (req, res) => {
  res.sendFile(__dirname + "/views/audit.html")
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port 3000");
})
