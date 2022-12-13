const db = require('../config');
class User {
    constructor(id, name, message){
        this.id = id;
        this.name = name;
        this.message = message;
    }
    addToDb(){
        const add = "INSERT INTO message VALUES (?, ?, ?);";
        db.connection.query(add, [this.id, this.message, this.name], (err, result) => {
            if (err) throw err;

            (console.log('added', result.affectedRows));
        });
    }
    removeFromDb(id){
        const rm = "DELETE FROM message WHERE ID = ?;";
        db.connection.query(rm, id, (err, result) => {
            if (err) throw err;

            (console.log('deleted', result.affectedRows));
        });
    }
    selectMessageDb(id){
        const sel = "SELECT Message_text FROM message WHERE ID = ?;";
        db.connection.query(sel, id, (err, result) => {
            if (err) throw err;
            
            console.log('selected', result);
        });
    }
}
module.exports = User;