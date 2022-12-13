const express = require("express");
const bodyParse = require("body-parser");
const app = express();
const port = '8080';
const about = require('./routes/aboutRoute');
const profile = require('./routes/profileRoute');
const index = require('./routes/indexRoute');
const projects = require('./routes/projectsRoute');
const pictures = require('./routes/picturesRoute');
const notFound = require('./routes/404Route');
const database = require('./config');
const user = require('./models/indexModel');
database.connect();
app.use(express.static(__dirname + "/public"));
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended: true}));
app.use('/', index);
app.use('/about', about);
app.use('/profile', profile);
app.use('/sources', projects);
app.use('/pictures', pictures);
app.use('*', notFound);
app.post('/post', (req, res) => {
    console.log(req.body);  // you will get your data in this as object.
    res.redirect('/');
});
app.listen(port,() =>{
    console.log(`Server is running on http://localhost:${port}`);
});


const useb = new user(1, 'Jhon', "bebra");

useb.selectMessageDb(1);