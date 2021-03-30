const Employee = require("./employee")

class Engineer extends Employee {
    constructor(name, email, id, github) {
        super(name, email, id)
        this.title = "Engineer"
        this.github = github;
    }
}

getRole(){
    return this.title;
}

getGithub(){
    return this.github;
}

module.exports = Engineer