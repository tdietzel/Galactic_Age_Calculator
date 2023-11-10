import {GalacticAge} from "../src/galacticAge.js"

describe("Galactic Age", () => {
    test("should create a GalacticAge class that takes in a # input for age", () => {
        const galacticAge = new GalacticAge(10);
        expect(galacticAge.age).toEqual(10);
    });

    test("should create an Earth function that assigns the age to Earth", () => {
        const galacticAge = new GalacticAge(10);
        expect(galacticAge.earthAge).toEqual(10);
    });
});