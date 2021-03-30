const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require("./lib/employee")
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")
const Manager = require("./lib/manager")


let teamArray = [];

const init = () => {
    inquirer.prompt([
        {
            message: "What is the name of your team?",
            name: "teamname"
        }
    ])

        .then((data) => {
            const team = data.teamname
            teamArray.push(team)
            addManager();
        })
}

const addManager = () => {

    inquirer
        .prompt([
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

        ])

        .then((data) => {
            const name = data.name
            const email = data.email
            const id = 1
            const officeNum = data.officeNum
            const teamMate = new Manager(name, email, id, officeNum)
            teamArray.push(teamMate)
            addTeamMates();
        });

    // console.log(data.name);
    // console.log(data.email);
    // console.log(data.officeNum);


}

const addTeamMates = () => {

    inquirer
        .prompt([
            {
                type: "list",
                message: "Does your team contain other members?",
                choices: ["We have an engineer", "We have an unpaid intern", "This is a one person opperation"],
                name: "newTeamMate"

            }
        ])
        .then((data) => {
            switch (data.newTeamMate) {
                case "We have an engineer":
                    addEngineer();
                    break;

                case "We have an unpaid intern":
                    addIntern();
                    break;
                case "This is a one person opperation":
                    makeTeam();
                    break;
            }
        });
}

const addEngineer = () => {

    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the engineer's name?",
                name: "name",
                validate: function (answer) {
                    if (answer.length < 1) {
                        return console.log("Need to enter a name!")
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
                message: "Please enter the engineer's github username",
                name: "github",
                validate: function (answer) {
                    if (answer.length < 1) {
                        return console.log("Need to enter a github username!")
                    }
                    return true;
                }
            },

        ])

        .then((data) => {
            const name = data.name
            const email = data.email
            const id = teamArray.length + 1
            const github = data.github
            const teamMate = new Engineer(name, email, id, github)
            teamArray.push(teamMate)
            addTeamMates();
        });

    // console.log(data.name);
    // console.log(data.email);
    // console.log(data.officeNum);


}

const addIntern = () => {

    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the Intern's name?",
                name: "name",
                validate: function (answer) {
                    if (answer.length < 1) {
                        return console.log("Need to enter a name!")
                    }
                    return true;
                }
            },

            {
                type: "input",
                message: "Please enter the Intern's email address",
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
                message: "Please enter the Intern's school name",
                name: "school",
                validate: function (answer) {
                    if (answer.length < 1) {
                        return console.log("Need to enter a school name!")
                    }
                    return true;
                }
            },

        ])

        .then((data) => {
            const name = data.name
            const email = data.email
            const id = teamArray.length + 1
            const school = data.school
            const teamMate = new Intern(name, email, id, school)
            teamArray.push(teamMate)
            addTeamMates();
        });

    // console.log(data.name);
    // console.log(data.email);
    // console.log(data.officeNum);


}

const makeTeam = () => {
    console.log("Your team is complete")
}

init()