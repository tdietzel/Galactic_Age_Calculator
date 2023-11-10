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
    // venus
    test("should create a Venus function that changes age compared to Earth by 0.62 yrs / 1 year", () => {
        expect(galacticAge.venusAge).toEqual(16.12);
    });
    // mars
    test("should create a Mars function that changes age compared to Earth by 1.88 yrs / 1 year", () => {
        expect(galacticAge.marsAge).toEqual(5.31);
    });
    // jupiter
    test("should create a Mars function that changes age compared to Earth by 11.86 yrs / 1 year", () => {
        expect(galacticAge.jupiterAge).toEqual(0.84);
    });
});