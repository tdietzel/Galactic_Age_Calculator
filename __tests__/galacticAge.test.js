import {GalacticAge} from "../src/galacticAge.js"

describe("Galactic Age", () => {
    let galacticAge;
    beforeEach(() => {
        galacticAge= new GalacticAge(10)
    });

    // constructor
    test("should create a GalacticAge class that takes in a # input for age", () => {
        expect(galacticAge.age).toEqual(10);
    });

    // earth
    test("should create an Earth function that assigns the age to Earth", () => {
        expect(galacticAge.earthAge).toEqual(10);
    });
    // mercury
    test("should create a Mercury function that changes age compared to Earth by 0.24 yrs / 1 year", () => {
        expect(galacticAge.mercuryAge).toEqual(41.66);
    });
});