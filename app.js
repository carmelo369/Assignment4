const express = require("express");
const app = express();

app.engine('html', require('ejs').renderFile);
app.set("view engine", "ejs");
app.use(express.static("public")); //access images, css, js

//Additional packages 
//Faker node package
var faker = require('faker');
var randomName = faker.name.findName();
console.log(randomName);

//knock knock jokes package
var knockknock = require('knock-knock-jokes');
//knockknock() // returns a knock knock joke
console.log(knockknock());

//routes
//passing data faker name and joke to views
app.get("/", function(req, res){
    res.render("index", {faker_name: faker.name.findName(), joke: knockknock()});
});

//passing data faker name and joke to views
app.get("/index", function(req, res) {
    res.render("index", {faker_name: faker.name.findName(), joke: knockknock()});
});

app.get("/windows", function(req, res) {
    res.render("windows");
});

app.get("/macOS", function(req, res) {
    res.render("macOS");
});

app.get("/linux", function(req, res) {
    res.render("linux");
});

app.get("*", function(req, res){
    res.send("Page Not Found");
});

//server listener
app.listen(process.env.PORT || 3000, process.env.IP, function(){
    console.log("Express server is running...");
});
