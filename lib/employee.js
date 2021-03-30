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
    getEmail() {
        return this.email;
    }
    getId() {
        return this.id;
    }
}

module.exports = Employee;