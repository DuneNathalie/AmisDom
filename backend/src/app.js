require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();

app.listen(process.env.APP_PORT);

app.use(cors());

app.use(express.json());

app.use(express.static(path.join(__dirname, "../public")));


app.use(express.static(path.join(__dirname, "..", "..", "frontend", "dist")));


const reactIndexFile = path.join(
  __dirname,
  "..",
  "..",
  "frontend",
  "dist",
  "index.html"
);

app.use(routes);


module.exports = app;
