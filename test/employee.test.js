const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
    const object = new Employee();
    expect(typeof (object)).toBe("object");
});

test("Can set name via constructor arguments", () => {
    const name = "Morgan";
    const object = new Employee(name);
    expect(object.name).toBe(name);
});

test("Can set id via constructor argument", () => {
    const testValue = "test@test.com";
    const object = new Employee("Morgan", testValue);
    expect(object.email).toBe(testValue);
});

test("Can set email via constructor argument", () => {
    const testValue = 1;
    const object = new Employee("Morgan", "test@test.com", testValue);
    expect(object.id).toBe(testValue);
});

test("Can get name via getName()", () => {
    const testValue = "Morgan";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
    const testValue = "test@test.com";
    const object = new Employee("Morgan", testValue);
    expect(object.getEmail()).toBe(testValue);
});
test("Can get id via getId()", () => {
    const testValue = 1;
    const object = new Employee("Morgan", "test@test.com", testValue);
    expect(object.getId()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const object = new Employee("Morgan", "test@test.com", 1);
    expect(object.getRole()).toBe(testValue);
});