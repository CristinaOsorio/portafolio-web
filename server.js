const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("./dist/portafolio-web"));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "/dist/portafolio-web/index.html"));
});
