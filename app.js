var express = require("express");
var app     = express();

app.set("view engine", "ejs")

app.use(express.static(__dirname + "/public")); // This is used to connect the public directory.

app.get("/", function(req, res) {
    res.render("index")
});

app.get("/aboutus", function(req, res) {
    res.render("aboutus")
});

app.get("/products", function(req, res) {
    res.render("products")
});

app.listen(process.env.PORT, function() {
    console.log("Server has started");
})