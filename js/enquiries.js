const inquirer = require("inquirer");
const mysql = require("mysql");

const enquiries = {

    firstquestion: {
        question: "What task would you like to perform?",
        a: 'Add departments, roles, employees',
        b: 'View departments, roles, employees',
        c: 'Update employee roles',
        d: 'Exit'
    },
    add: {
        question: "What would you like to add?",
        a: 'Department',
        b: 'Role',
        c: 'Employee'
    },
    departmentAdd:{
        question: 'What is the name of the department you wish to add?'
    },
    roleAdd:{
        titleQuestion: 'What is the title of this new role?',
        salaryQuestion: 'What is the salary of this new role?',
        departmentQuestion: 'What department is this a part of?'
    },
    employeeAdd:{
        firstNameQuestion: "What is the employee's first name?",
        lastNameQuestion: "What is the employee's last name?",
        roleQuestion: "What is their role?",
        managerQuestion: "Who is their manager?"
    },
    view: {
        question: "What would you like to view?",
        a: 'Departments',
        b: 'Roles',
        c: 'Employees'
    },
    update: {
        employeeQuestion: "Which employee role would you like to update?",
        roleQuestion: "What is their new role?"
    }
}

module.exports = enquiries;
