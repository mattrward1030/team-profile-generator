const Employee = require("../lib/Employee");


describe("Employee", () => {
    describe("Initialization", () => {
        it("Can instantiate Employee object", () => {
            const object = new Employee();
            expect(typeof (object)).toBe("object");
        });

        it("Will set 'name', 'email' and 'id' when instantiated", () => {
            const name = "Morgan";
            const email = "Morgan@test.com";
            const id = 1;
            const object = new Employee(name, email, id)

            expect(object.name).toEqual(name);
            expect(object.email).toEqual(email);
            expect(object.id).toEqual(id);

        });
    });

    describe("getName", () => {
        it("Will get the name of the object", () => {
            const object = new Employee("Morgan", "Morgan@test.com", 1)

            expect(object.getName()).toEqual(object.name);
        });
    });

    describe("getEmail", () => {
        it("Will get the email of the object", () => {
            const object = new Employee("Morgan", "Morgan@test.com", 1)

            expect(object.getEmail()).toEqual(object.email);
        });
    });
    describe("getID", () => {
        it("Will get the id of the object", () => {
            const object = new Employee("Morgan", "Morgan@test.com", 1)

            expect(object.getId()).toEqual(object.id);
        });
    });

    describe("getRole", () => {
        it("Will get the role of the object", () => {
            const object = new Employee("Morgan", "Morgan@test.com", 1)

            expect(object.getRole()).toEqual("Employee");
        });
    });
});