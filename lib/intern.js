const Employee = require("./employee")

class Intern extends Employee {
    constructor(name, email, id, school) {
        super(name, email, id)
        this.title = "Intern"
        this.school = school;
    }

    getRole() {
        return this.title;
    }
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;