const express = require("express");
const path = require("path");
var cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static('public'));
app.use(cors());

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });