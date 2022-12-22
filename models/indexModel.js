const db = require('../config');
class User {
    constructor(name, message){
        this.name = name;
        this.message = message;
    }
    addToDb(){
        const add = "INSERT INTO user VALUES (?, ?, ID);";
        db.connection.query(add, [this.name, this.message], (err, result) => {
            if (err) throw err;

            (console.log('added', result.affectedRows));
        });
    }
    removeFromDb(id){
        const rm = "DELETE FROM user WHERE ID = ?;";
        db.connection.query(rm, id, (err, result) => {
            if (err) throw err;

            (console.log('deleted', result.affectedRows));
        });
    }
    selectMessageDb(id){
        const sel = "SELECT message_text FROM user WHERE ID = ?;";
        db.connection.query(sel, id, (err, result) => {
            if (err) throw err;
            
            console.log('selected', result);
        });
    }
    async selectAll(){
        const sel = "SELECT * FROM user;";
        const get = () => {  // здесь я получаю айди из дб и отправляю в контроллер
            return new Promise((res, rej) => {
                setTimeout(() => {
                        db.connection.query(sel, (err, result) => {
                        if (err) throw err;
                        console.log('selected');
                        res(result);
                    });
                }, 500);
            });
        }
        const ids = await get();
        return ids;
        /*db.connection.query(sel, (err, result) => {
            if (err) throw err;
            console.log('selected');
        }); */
    }
}
module.exports = User;