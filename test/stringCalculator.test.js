const add = require("../stringCalculator");

describe("String Calculator", () => {
    test("returns 0 for an empty string", () => {
      expect(add("")).toBe(0);
    });

    test("returns the number itself for a single number", () => {
        expect(add("1")).toBe(1);
    });

    test("returns sum of two numbers separated by a comma", () => {
        expect(add("1,5")).toBe(6);
    });

    test("returns sum of multiple numbers", () => {
        expect(add("1,2,3,4")).toBe(10);
    });
});