const connection = require('./connections');

// Use the connection object to execute queries
connection.query('SELECT * FROM employees', (err, results) => {
  if (err) throw err;
  console.log(results);
});

// Close the connection when done
connection.end();
