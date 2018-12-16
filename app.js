var express = require("express");
var app     = express();

app.set("view engine", "ejs")

app.get("/index", function(req, res) {
    res.render("index")
});

app.listen(process.env.PORT, function() {
    console.log("Server has started");
})