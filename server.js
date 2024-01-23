const express = require("express");
const path = require("path");
var cors = require("cors");

const app = express();
app.use(express.static('public'));
app.use(cors());

app.listen(8888, "localhost", function () {
  console.log(
    "Server listening on http://%s:%d in %s mode...",
    this.address().address,
    this.address().port,
    app.settings.env
  );
});
