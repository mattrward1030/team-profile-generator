const Employee = require("./employee")

class Intern extends Employee {
    constructor(name, email, id, school) {
        super(name, email, id)
        this.title = "Intern"
        this.school = school;
        this.id = id;
    }

    getRole() {
        return this.title;
    }
    getId() {
        return this.id;
    }
    getSchool() {
        return this.school;
    }

}

module.exports = Intern;