const mysql = require("mysql")

//sets up connection to db
const connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "employeeDB"
});

// connects to db and runs first question
connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;