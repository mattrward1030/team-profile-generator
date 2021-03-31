const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
    const testValue = "GitHubUser";
    const object = new Engineer("Morgan", 1, "test@test.com", testValue);
    expect(object.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const object = new Engineer("Morgan", 1, "test@test.com", "GitHubUser");
    expect(object.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
    const testValue = "GitHubUser";
    const object = new Engineer("Morgan", 1, "test@test.com", testValue);
    expect(object.getGithub()).toBe(testValue);
});