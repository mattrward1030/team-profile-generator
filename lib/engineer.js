const Employee = require("./employee")

class Engineer extends Employee {
    constructor(name, email, id, github) {
        super(name, email, id)
        this.title = "Engineer"
        this.github = github;
        this.id = id;
    }


    getRole() {
        return this.title;
    };
    getId() {
        return this.id;
    }

    getGithub() {
        return this.github;
    };


}

module.exports = Engineer