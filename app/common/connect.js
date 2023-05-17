const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'anvip123',
    database: 'mltube'
})

connection.connect(function (err) { 
    if(err) console.log("Ket noi csdl ko thanh cong")
})

module.exports = connection;
