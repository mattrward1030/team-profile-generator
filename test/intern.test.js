const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("Can instantiate Intern object", () => {
            const object = new Intern();
            expect(typeof (object)).toBe("object");
        });

        it("Will set 'name', 'id', 'email' and 'school' when instantiated", () => {
            const name = "Morgan";
            const email = "Morgan@test.com";
            const id = 1;
            const school = "school";
            const object = new Intern(name, email, id, school)

            expect(object.name).toEqual(name);
            expect(object.email).toEqual(email);
            expect(object.id).toEqual(id);
            expect(object.school).toEqual(school);


        });
    });

    describe("getName", () => {
        it("Will get the name of the object", () => {
            const object = new Intern("Morgan", "Morgan@test.com", 1, "school")

            expect(object.getName()).toEqual(object.name);
        });
    });

    describe("getEmail", () => {
        it("Will get the email of the object", () => {
            const object = new Intern("Morgan", "Morgan@test.com", 1, "school")

            expect(object.getEmail()).toEqual(object.email);
        });
    });
    describe("getID", () => {
        it("Will get the id of the object", () => {
            const object = new Intern("Morgan", "Morgan@test.com", 1, "school")

            expect(object.getId()).toEqual(object.id);
        });
    });
    describe("getSchool", () => {
        it("Will get the school of the object", () => {
            const object = new Intern("Morgan", "Morgan@test.com", 1, "school")

            expect(object.getSchool()).toEqual(object.school);
        });
    });

    describe("getRole", () => {
        it("Will get the role of the object", () => {
            const object = new Intern("Morgan", "Morgan@test.com", 1, "school")

            expect(object.getRole()).toEqual("Intern");
        });
    });
});