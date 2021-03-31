const Manager = require("../lib/Manager");


describe("Manager", () => {
    describe("Initialization", () => {
        it("Can instantiate Manager object", () => {
            const object = new Manager();
            expect(typeof (object)).toBe("object");
        });

        it("Will set 'name', 'id' 'email' and office number when instantiated", () => {
            const name = "Morgan";
            const email = "Morgan@test.com";
            const id = 1;
            const officeNum = 2;
            const object = new Manager(name, email, id, officeNum)

            expect(object.name).toEqual(name);
            expect(object.email).toEqual(email);
            expect(object.id).toEqual(id);
            expect(object.officeNum).toEqual(officeNum);

        });
    });

    describe("getName", () => {
        it("Will get the name of the object", () => {
            const object = new Manager("Morgan", "Morgan@test.com", 1)

            expect(object.getName()).toEqual(object.name);
        });
    });

    describe("getEmail", () => {
        it("Will get the email of the object", () => {
            const object = new Manager("Morgan", "Morgan@test.com", 1)

            expect(object.getEmail()).toEqual(object.email);
        });
    });
    describe("getID", () => {
        it("Will get the id of the object", () => {
            const object = new Manager("Morgan", "Morgan@test.com", 1)

            expect(object.getId()).toEqual(object.id);
        });
    });
    describe("getOfficeNum", () => {
        it("Will get the office number of the object", () => {
            const object = new Manager("Morgan", "Morgan@test.com", 1, 2)

            expect(object.getOfficeNum()).toEqual(object.officeNum);
        });
    });
    describe("getRole", () => {
        it("Will get the role of the object", () => {
            const object = new Manager("Morgan", "Morgan@test.com", 1)

            expect(object.getRole()).toEqual("Manager");
        });
    });
});