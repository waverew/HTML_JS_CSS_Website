const express = require("express");
const bodyParse = require("body-parser");
const app = express();
const port = 8080;
const mysql = require('mysql');
const about = require('./routes/aboutRoute');
const profile = require('./routes/profileRoute');
const index = require('./routes/indexRoute');
const projects = require('./routes/projectsRoute');
const pictures = require('./routes/picturesRoute');
const { con } = require("./config");
const conn = mysql.createConnection(con);
conn.connect(function(err) {
  if (err) throw err;
  console.log("Connected to database!");
});
app.use(express.static(__dirname + "/public"));
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended: true}));
app.use('/', index);
app.use('/about', about);
app.use('/profile', profile);
app.use('/sources', projects);
app.use('/pictures', pictures);
app.post('/post', (req, res) => {
    console.log(req.body);  // you will get your data in this as object.
    res.redirect('/');
});
app.get("*", (req, res) => {
    res.status(404).send("404");
});
app.listen(port,() =>{
    console.log(`Server is running on http://localhost:${port}`);
});