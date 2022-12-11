const path = require('path');
const pt = path.join(__dirname, "../public/pages/pictures.html");
module.exports = {
    get : (req, res) => {
        res.sendFile(pt);
    }
}