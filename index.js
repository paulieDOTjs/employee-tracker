const inquirer = require("inquirer");
const cTable = require('console.table');


//references page where inquirer inquiry strings are kept
const enquiries = require("./js/enquiries");
const database = require("./js/database");
const connection = require("./config/connection");

// begins the user-facing program, asking them where they would like to go.
function startQuestioning() {
    inquirer.prompt(
        {
            type: "list",
            message: enquiries.firstquestion.question,
            choices: [enquiries.firstquestion.a, enquiries.firstquestion.b, enquiries.firstquestion.c, enquiries.firstquestion.d],
            name: "task"
        }
    )

        .then(function (response) {
            switch (response.task) {
                case enquiries.firstquestion.a:
                    addSelect();
                    break;
                case enquiries.firstquestion.b:
                    viewSelect();
                    break;
                case enquiries.firstquestion.c:
                    handleEmployeeUpdate()
                    break;
                case enquiries.firstquestion.d:
                    endProgram();
            }
        })

}
startQuestioning()

//asks the user what they would like to add.
function addSelect() {
    inquirer.prompt(
        {
            type: "list",
            message: enquiries.add.question,
            choices: [enquiries.add.a, enquiries.add.b, enquiries.add.c],
            name: "addition"
        }
    )

        .then(function (response) {
            switch (response.addition) {
                case enquiries.add.a:
                    handleDepartmentAdd();
                    break;
                case enquiries.add.b:
                    console.lo
                    handleRoleAdd();
                    break;
                case enquiries.add.c:
                    handleEmployeeAdd();
                    break;
            }
        })
}


//Asks the question to add a department, and adds it to the database
function handleDepartmentAdd() {
    inquirer.prompt(
        {
            type: "input",
            message: enquiries.departmentAdd.question,
            name: "name"
        }
    )
        .then(function (response) {
            database.addDepartment(response.name);
            console.log('\n')
            console.log('\n')
            console.log('Department added')
            startQuestioning();
        })
}

//Asks the questions to add a role, and adds it to the database
function handleRoleAdd() {
    inquirer.prompt([
        {
            type: "input",
            message: enquiries.roleAdd.titleQuestion,
            name: "title"
        },
        {
            type: "input",
            message: enquiries.roleAdd.salaryQuestion,
            name: "salary",
            validate: function (salary) {
                checkNumber(salary)
                return /[1-9]/gi.test(salary);
            }
        },
        {
            type: "input",
            message: enquiries.roleAdd.departmentQuestion,
            name: "department",
            validate: function (department) {
                checkNumber(department)
                return /[1-9]/gi.test(department);
            }
        },
    ]
    )
        .then(function (response) {

            database.addRole(response.title, response.salary, response.department);
            console.log('\n')
            console.log('\n')
            console.log('Role added')
            startQuestioning();
        })
}

function handleEmployeeAdd() {
    inquirer.prompt([
        {
            type: "input",
            message: enquiries.employeeAdd.firstNameQuestion,
            name: "first"
        },
        {
            type: "input",
            message: enquiries.employeeAdd.lastNameQuestion,
            name: "last"
        },
        {
            type: "input",
            message: enquiries.employeeAdd.roleQuestion,
            name: "role",
            validate: function (role) {
                checkNumber(role)
                return /[1-9]/gi.test(role);
            }
        },
        {
            type: "input",
            message: enquiries.employeeAdd.managerQuestion,
            name: "manager",
            validate: function (manager) {
                checkNumber(manager)
                return /[1-9]/gi.test(manager);
            }

        },
    ]
    )
        .then(function (response) {
            database.addEmployee(response.first, response.last, response.role, response.manager);
            console.log('\n')
            console.log('\n')
            console.log('Employee added')
            startQuestioning();
        })
}

//Asks the followup question for when view is selected
async function viewSelect() {
    await inquirer.prompt(
        {
            type: "list",
            message: enquiries.view.question,
            choices: [enquiries.view.a, enquiries.view.b, enquiries.view.c],
            name: "view"
        }
    )

        .then(function (response) {

            switch (response.view) {
                case enquiries.view.a:
                    database.viewAll('departments')
                    break;
                case enquiries.view.b:
                    database.viewAll('roles')
                    break;
                case enquiries.view.c:
                    database.viewAll('employees')
                    break;
            }
        })
    startQuestioning();
}

function handleEmployeeUpdate() {
    inquirer.prompt([
        {
            type: "input",
            message: enquiries.update.employeeQuestion,
            name: "employee",
            validate: function (employee) {
                checkNumber(employee)
                return /[1-9]/gi.test(employee);
            }
        },
        {
            type: "input",
            message: enquiries.update.roleQuestion,
            name: "role",
            validate: function (role) {
                checkNumber(role)
                return /[1-9]/gi.test(role);
            }
        }
    ]
    )
        .then(function (response) {
            database.updateEmployeeRole(response.employee, response.role);
            console.log('\n')
            console.log('\n')
            console.log('Employee Updated')
            startQuestioning();
        })
}

function checkNumber(number) {
    if (/[1-9]/gi.test(number)) {
        return /[1-9]/gi.test(number);
    }
    else {
        console.log('\n')
        console.log('\n')
        return console.log("\n Invalid input! Enter number only.");
    }
}

//ends the program
function endProgram() {
    connection.end(function (err) {
        console.log('\n')
        console.log('\n')
        console.log('Goodbye.')
    });
    return;
} 