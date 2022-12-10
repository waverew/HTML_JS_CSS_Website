const express = require("express");
const bodyParse = require("body-parser");
const app = express();
const port = 8080;
const mysql = require('mysql');
const { con } = require("./config");
const conn = mysql.createConnection(con);
conn.connect(function(err) {
  if (err) throw err;
  console.log("Connected to database!");
});
app.use(express.static(__dirname + "/public"));
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended: true}));
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/pages/index.html");
});
app.post('/post', (req, res) => {
    console.log(req.body);  // you will get your data in this as object.
    res.redirect('/');
});
app.get("/profile", (req, res) => {
    res.sendFile(__dirname + "/" + "public" + "/" + "pages" + "/" + "profile.html");
});
app.get("/pictures", (req, res) => {
    res.sendFile(__dirname + "/public/pages/pictures.html");
});
app.get("/sources", (req, res) => {
    res.sendFile(__dirname + "/public/pages/projects.html");
});
app.get("/group", (req, res) => {
    res.sendFile(__dirname + "/public/pages/user.html");
});
app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/public/pages/about.html");
});
app.get("*", (req, res) => {
    res.status(404).send("404");
});
app.listen(port,() =>{
    console.log(`Server is running on http://localhost:${port}`);
});