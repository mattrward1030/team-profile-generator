const inquirer = require('inquirer');
const fs = require('fs');

const managerQ = [

    {
        type: 'input',
        message: 'What is the team manager name?',
        name: 'name',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Need to enter a name!")
            }
            return true;
        }
    },

    {
        type: 'input',
        message: 'Please enter the manager id number',
        name: 'number',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Need to enter the manager's id number!")
            }
            return true;
        }
    },

    {
        type: "input",
        message: "Please enter the manager's email address",
        name: "email",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Need to enter an email address!")
            }
            return true;
        }
    },

    {
        type: "input",
        message: "Please enter the manager's office number",
        name: "officeNum",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Need to enter a office number!")
            }
            return true;
        }
    },
]

const engineerQ = [

    {
        type: "input",
        message: "What is the team engineer's name?",
        name: "name",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Need to enter a name!")
            }
            return true;
        }
    },

    {
        type: 'input',
        message: "Please enter the engineer's id number",
        name: 'number',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Need to enter the engineer's id number!")
            }
            return true;
        }
    },

    {
        type: "input",
        message: "Please enter the engineer's email address",
        name: "email",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Need to enter an email address!")
            }
            return true;
        }
    },

    {
        type: "input",
        message: "Please enter the engineer's Github username",
        name: "username",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Need to enter a username!")
            }
            return true;
        }
    },
]


const internrQ = [

    {
        type: "input",
        message: "What is the team interns's name?",
        name: "name",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Need to enter a name!")
            }
            return true;
        }
    },

    {
        type: 'input',
        message: "Please enter the intern's id number",
        name: 'number',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Need to enter the intern's id number!")
            }
            return true;
        }
    },

    {
        type: "input",
        message: "Please enter the interns's email address",
        name: "email",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Need to enter an email address!")
            }
            return true;
        }
    },

    {
        type: "input",
        message: "Please enter the interns's school",
        name: "school",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Need to enter a school!")
            }
            return true;
        }
    },
]