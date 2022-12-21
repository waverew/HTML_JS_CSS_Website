const path = require('path');
const model = require('../models/indexModel');
module.exports = {
    get : (req, res, then) => {
        res.sendFile(path.join(__dirname, "../public/pages/index.html"));
        const temp = new model();
        const bebra = async () => {
            const result = await temp.selectAllId();
            for (var i = 0; i < result.length; i++){
                console.log(result[i]);
            }
            
            // res.send(result);
        }
        bebra();

    },
    post : (req, res) =>{
        console.log(req.body);
        const temp = new model(req.body.user_name, req.body.user_message);
        temp.addToDb();
        res.redirect('/');
          // you will get your data in this as object.
    }
}