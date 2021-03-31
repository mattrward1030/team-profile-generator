const Employee = require("./employee")

class Manager extends Employee {
    constructor(name, email, id, officeNum) {
        super(name, email, id)
        this.title = "Manager"
        this.officeNum = officeNum;
        this.id = id;
    }

    getRole() {
        return this.title;
    }
    getId() {
        return this.id;
    }
    getOfficeNum() {
        return this.officeNum;
    }


}

module.exports = Manager