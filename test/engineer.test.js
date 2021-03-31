const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("Can instantiate Engineer object", () => {
            const object = new Engineer();
            expect(typeof (object)).toBe("object");
        });

        it("Will set 'name', 'email' 'id' and 'github' when instantiated", () => {
            const name = "Morgan";
            const email = "Morgan@test.com";
            const id = 1;
            const github = "github";
            const object = new Engineer(name, email, id, github)

            expect(object.name).toEqual(name);
            expect(object.email).toEqual(email);
            expect(object.id).toEqual(id);
            expect(object.github).toEqual(github);


        });
    });

    describe("getName", () => {
        it("Will get the name of the object", () => {
            const object = new Engineer("Morgan", "Morgan@test.com", 1, "github")

            expect(object.getName()).toEqual(object.name);
        });
    });

    describe("getEmail", () => {
        it("Will get the email of the object", () => {
            const object = new Engineer("Morgan", "Morgan@test.com", 1, "github")

            expect(object.getEmail()).toEqual(object.email);
        });
    });
    describe("getID", () => {
        it("Will get the id of the object", () => {
            const object = new Engineer("Morgan", "Morgan@test.com", 1, "github")

            expect(object.getId()).toEqual(object.id);
        });
    });
    describe("getGithub", () => {
        it("Will get the github username of the object", () => {
            const object = new Engineer("Morgan", "Morgan@test.com", 1, "github")

            expect(object.getGithub()).toEqual(object.github);
        });
    });
    describe("getRole", () => {
        it("Will get the role of the object", () => {
            const object = new Engineer("Morgan", "Morgan@test.com", 1, "github")

            expect(object.getRole()).toEqual("Engineer");
        });
    });
});