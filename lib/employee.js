class Employee {
    constructor(name, email, id) {
        this.name = name;
        this.title = "Employee"
        this.email = email;
        this.id = id;
    }

    getName() {
        return this.name;
    }
    getRole() {
        return this.title;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }

}

module.exports = Employee;