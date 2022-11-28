const express = require("express");
const app = express();
const port = 8080;
app.use(express.static(__dirname + "/public"));
app.get("/home", (req, res) => {
    res.send("baka");
});
app.listen(port,() =>{
    console.log(`Server is running on localhost:${port}`);
});

