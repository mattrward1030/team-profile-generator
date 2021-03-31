const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("Can instantiate Engineer object", () => {
            const object = new Engineer();
            expect(typeof (object)).toBe("object");
        });

        it("Will set 'name', 'id' and 'email' when instantiated", () => {
            const name = "Morgan";
            const email = "Morgan@test.com";
            const id = 1;
            const object = new Engineer(name, email, id)

            expect(object.name).toEqual(name);
            expect(object.email).toEqual(email);
            expect(object.id).toEqual(id);

        });
    });

    describe("getName", () => {
        it("Will get the name of the object", () => {
            const object = new Engineer("Morgan", "Morgan@test.com", 1)

            expect(object.getName()).toEqual(object.name);
        });
    });

    describe("getEmail", () => {
        it("Will get the email of the object", () => {
            const object = new Engineer("Morgan", "Morgan@test.com", 1)

            expect(object.getEmail()).toEqual(object.email);
        });
    });
    describe("getID", () => {
        it("Will get the id of the object", () => {
            const object = new Engineer("Morgan", "Morgan@test.com", 1)

            expect(object.getId()).toEqual(object.id);
        });
    });

    describe("getRole", () => {
        it("Will get the role of the object", () => {
            const object = new Engineer("Morgan", "Morgan@test.com", 1)

            expect(object.getRole()).toEqual("Engineer");
        });
    });
});