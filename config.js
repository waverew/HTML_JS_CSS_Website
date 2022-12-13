const mysql = require('mysql');
const config = {
    host: "localhost",
    user: "root",
    password: "ldjhrbyu2354@",
    port: 3030,
    database: "test_1"
}
const connection = mysql.createConnection(config)
const connect = () => {
    connection.connect(function(err){
    if (err) throw err;
    console.log("Connected to database!");
    });
}
module.exports = {
    connection, connect
}