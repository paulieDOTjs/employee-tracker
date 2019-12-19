const connection = require("../config/connection");

const database = {

    viewAll(view) {
        let items = [];
        connection.query(`SELECT * FROM ${view}`, function (err, res) {
            if (err) throw err;
            for (let i = 0; i < res.length; i++) {
                items.push(res[i]);
            }
            console.log('\n')
            console.log('\n')
            console.table(items);
        });
    },
    addDepartment(name) {
        connection.query(`INSERT INTO departments (name)
        VALUES ('${name}');`, function (err, res) {
            if (err) throw err;
        });
    },
    addRole(title, salary, department_id) {
        connection.query(`INSERT INTO roles (title, salary, department_id)
        VALUES ('${title}', ${salary}, ${department_id});`, function (err, res) {
            if (err) throw err;
        });
    },
    addEmployee(first_name, last_name, role_id, manager_id) {
        connection.query(`INSERT INTO employees (first_name , last_name , role_id, manager_id)
        VALUES ('${first_name}', '${last_name}',  ${role_id},  ${manager_id});`, function (err, res) {
            if (err) throw err;
        });
    },
    updateEmployeeRole(employeeID, roleID) {
        connection.query("UPDATE employees SET ? WHERE ?",
            [
                {
                    role_id: roleID
                },
                {
                    id: employeeID
                }
            ],
            function (err, res) {
                if (err) throw err;
            }
        )
    }

}






module.exports = database;