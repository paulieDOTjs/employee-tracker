const connection = require("./connection");

const database = {

    viewAll(view) {
        let items = [];
        connection.query(`SELECT * FROM ${view}`, function (err, res) {
            if (err) throw err;
            for (let i = 0; i < res.length; i++) {
                items.push(res[i].name);
            }
            console.table(items);
        });
    },
    async getDepartments() {
        const departments = [];
        await connection.query(`SELECT * FROM departments`, function (err, res) {
            if (err) throw err;
            for (let i = 0; i < res.length; i++) {
                departments.push(res[i]);
            }
         console.log(departments);
        });
        await console.log('hi')
        console.log(departments);

        // return departments;
    },
    addDepartment(name) {
        connection.query(`INSERT INTO departments (name)
        VALUES ('${name}');`, function (err, res) {
            if (err) throw err;
        });
    },
    addRole(title, salary, department_id) {
        connection.query(`INSERT INTO roles (title, salary, department_id)
        VALUES ('${title, salary, department_id}');`, function (err, res) {
            if (err) throw err;
        });
    },
    addEmployee(first, last, role, manager) {
        connection.query(`INSERT INTO employees (first_name , last_name , role_id, manager_id)
        VALUES ('${first, last, role, manager}');`, function (err, res) {
            if (err) throw err;
        });
    }


}






module.exports = database;