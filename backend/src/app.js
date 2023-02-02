const express = require('express');
const fs = require("fs");
const path = require("path");
const cors = require('cors');
const app = express();

require("dotenv").config();

app.use(cors());

app.use(express.json());

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.static(path.join(__dirname, "..", "..", "frontend", "dist")));

const animauxRoute = require("./router");
app.use("/animal", animauxRoute);

app.get("/", (req, res) => {
  res.status(200).send("get reussi")
})

const reactIndexFile = path.join(
  __dirname,
  "..",
  "..",
  "frontend",
  "dist",
  "index.html"
);

if (fs.existsSync(reactIndexFile)) {
  app.get("*", (req, res) => {
    res.sendFile(reactIndexFile);
  });
}

app.listen(5005, () => {
    console.log("lance sur port 5005")
})
  