const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ranger100',
  database: 'employees_db',
  port: 3306,
});

console.log(`Connected to the employees_db database...`);

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;
