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
            const officeNum = data.officeNum
            const teamMate = new Manager(name, email, id, officeNum)
            teamArray.push(teamMate)
            addTeamMates();
        });

    console.log(data.name);
    console.log(data.email);
    console.log(data.officeNum);


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

                case "We have an intern":
                    addIntern();
                    break;
                case "This is a one person opperation":
                    makeTeam();
                    break;
            }
        });
}



init()