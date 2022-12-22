const model = require('../models/indexModel');
module.exports = {
    get : (req, res) => {
        const temp = new model();
        const bebra = async () => {
            const result = await temp.selectAll();
            console.log(result);
            res.json(result);
        }
        bebra();
    }
}