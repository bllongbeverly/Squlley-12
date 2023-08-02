const inquirer = require('inquirer');
const db = require('./db');

startApp();

function startApp() {
  inquirer
    .prompt({
      name: 'action',
      type: 'list',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'Exit',
      ],
    })
    .then((answer) => {
      switch (answer.action) {
        case 'View all departments':
          db.viewDepartments();
          break;
        case 'View all roles':
          db.viewRoles();
          break;
        case 'View all employees':
          db.viewEmployees();
          break;
        case 'Add a department':
          addDepartment();
          break;
        // Add cases for other options here
        case 'Exit':
          db.connection.end();
          break;
        default:
          console.log('Invalid option');
          startApp();
          break;
      }
    });
}

function addDepartment() {
  inquirer
    .prompt({
      name: 'department_name',
      type: 'input',
      message: 'Enter the name of the department:',
    })
    .then((answer) => {
      db.addDepartment(answer.department_name, () => {
        console.log('Department added successfully!');
        startApp();
      });
    });
}

// Similar functions for addRole, addEmployee, and updateEmployeeRole

// ...



function addRole() {
  // Similar to addDepartment, prompt user for role details and insert into the roles table
}

function addEmployee() {
  // Similar to addDepartment and addRole, prompt user for employee details and insert into the employees table
}

function updateEmployeeRole() {
  // Prompt user to select an employee to update and a new role, then update the role_id in the employees table
}

// Call the startApp function to begin the application
startApp();
