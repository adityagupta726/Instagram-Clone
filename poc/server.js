const express = require("express");
const app = express();
//  public folder that could be used by any client
app.use(express.static("public"));
// localhost:2000

app.listen(2000, function () {
    console.log("Server started at port 2000");
})