const connection = require('./connections');

class DB {
  constructor(connection) {
    this.connection = connection;
  }

  viewRoles() {
    this.connection.query('SELECT * FROM roles', (err, results) => {
      if (err) throw err;
      console.table(results);
    });
  }

  viewDepartments() {
    this.connection.query('SELECT * FROM departments', (err, results) => {
      if (err) throw err;
      console.table(results);
    });
  }

  // Add methods for addDepartment, addRole, addEmployee, updateEmployeeRole

  // ...
}

module.exports = new DB(connection);
