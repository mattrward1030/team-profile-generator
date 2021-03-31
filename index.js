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
            name: "teamName"
        }
    ])

        .then((data) => {
            const team = data.teamName
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
                message: "Please enter the id number",
                name: "id",
                validate: function (answer) {
                    if (answer.length < 1) {
                        return console.log("Need to enter an id number!")
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
            const id = data.id
            const email = data.email
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
                choices: ["We have an engineer", "We have an unpaid intern", "Done adding team mates"],
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
                case "Done adding team mates":
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
                message: "Please enter the id number",
                name: "id",
                validate: function (answer) {
                    if (answer.length < 1) {
                        return console.log("Need to enter an id number!")
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
            const id = data.id
            const email = data.email
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
                message: "Please enter the id number",
                name: "id",
                validate: function (answer) {
                    if (answer.length < 1) {
                        return console.log("Need to enter an id number!")
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
            const id = data.id
            const email = data.email
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

    const newHtml = []
    const htmlPlate = `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
    <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="../style.css" />
    <title>Profile-generator</title>
</head>

<body>
    <div class="jumbotron jumbotron-fluid card text-white bg-danger mb-3 text-center">
        <h1>The Stacked Team</h1>
    </div>
    <div class="container">
    <div class="card-deck">
    
    `

    newHtml.push(htmlPlate);

    for (var i = 1; i < teamArray.length; i++) {
        let obj = `
        <div class="card  border-primary mb-3">
            <div class="card-body">
            <div class="card-header text-white bg-primary mb-3">
            <h1>${teamArray[i].name}</h1>
            <h3>${teamArray[i].title}</h3>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"">Employee ID: ${teamArray[i].id}</li>
                <li class="list-group-item"">Email: <a href="mailto:${teamArray[i].email}">${teamArray[i].email}</a></li>

        `
        if (teamArray[i].officeNum) {
            obj += `
            <li class="list-group-item">Office number:${teamArray[i].officeNum}</li>
            `
        }
        if (teamArray[i].github) {
            obj += `
            <li class="list-group-item">GitHub: <a href="https://github.com/${teamArray[i].github}" target="_blank">${teamArray[i].github}</a></li>
            `
        }
        if (teamArray[i].school) {
            obj += `
            <li class="list-group-item">School: ${teamArray[i].school}</li>
            `
        }
        obj += `
        </ul>
        </div>
        </div>
        `
        newHtml.push(obj)
    }
    const endPage = `
    
    </div>
    </div>
    </div>
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
    <script src="./assets/JS/script.js"></script>
    </body>
    </html>
    `
    newHtml.push(endPage);

    fs.writeFile(`./generated-html/${teamArray[0]}.html`, newHtml.join(""), function (err) {

    })

}




init()