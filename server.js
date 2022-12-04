const express = require("express");
const app = express();
const port = 8080;
app.get("/profile", (req, res) => {
    res.sendFile(__dirname + "/" + "public" + "/" + "pages" + "/" + "home.html");
});
app.get("/group", (req, res) => {
    res.sendFile(__dirname + "/public/pages/user.html");
});
app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/public/pages/about.html");
})
app.use(express.static(__dirname + "/public"));
app.listen(port,() =>{
    console.log(`Server is running on http://localhost:${port}`);
});