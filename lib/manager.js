const Employee = require("./employee")

class Manager extends Employee {
    constructor(name, email, id, school) {
        super(name, email, id)
        this.title = "Manager"
        this.officeNum = officeNum;
    }

    getRole() {
        return this.title;
    }
    getOfficeNum() {
        return this.officeNum;
    }
}

module.exports = Manager