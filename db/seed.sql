use employees_db
INSERT INTO departments (id, department_name)
VALUES
  (1, 'Sales'),
  (2, 'Marketing'),
  (3, 'Engineering');


INSERT INTO roles (id, title, salary, department_id)
VALUES
  (1, 'Sales Manager', 5000, 1),
  (2, 'Sales Representative', 3000, 1),
  (3, 'Marketing Manager', 4500, 2),
  (4, 'Marketing Specialist', 2500, 2),
  (5, 'Software Engineer', 6000, 3),
  (6, 'UI/UX Designer', 4000, 3);


INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES
  (1, 'John', 'Doe', 1, NULL),
  (2, 'Jane', 'Smith', 2, 1),
  (3, 'Michael', 'Johnson', 3, NULL),
  (4, 'Emily', 'Williams', 4, 3),
  (5, 'David', 'Brown', 5, NULL),
  (6, 'Olivia', 'Davis', 6, 5);
