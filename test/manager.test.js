const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
    const testValue = 100;
    const object = new Manager("Morgan", 1, "test@test.com", testValue);
    expect(object.officeNum).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const object = new Manager("Morgan", 1, "test@test.com", 100);
    expect(object.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
    const testValue = 100;
    const object = new Manager("Morgan", 1, "test@test.com", testValue);
    expect(object.getOfficeNum()).toBe(testValue);
});