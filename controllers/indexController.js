const path = require('path');
const model = require('../models/indexModel');
module.exports = {
    get : (req, res) => {
        res.sendFile(path.join(__dirname, "../public/pages/index.html"));
    },
    post : (req, res) =>{
        console.log(req.body);
        const temp = new model(req.body.user_name, req.body.user_message);
        temp.addToDb();
        res.redirect('/');
          // you will get your data in this as object.
    }
}