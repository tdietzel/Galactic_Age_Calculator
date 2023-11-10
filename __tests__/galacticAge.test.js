import {GalacticAge, GalacticBirthday} from "../src/galacticAge.js"

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

    // birthday
    test("should create a birthday function that returns the difference between current age and bday year", () => {
        const galacticAge = new GalacticAge(56, 43);
        expect(galacticAge.birthday()).toEqual(13);
    });
});

describe("Galactic Birthday", () => {
    // constructor
    test("should create a GalacticAge class that takes in the age difference between current age & birthday as age", () => {
        const galacticAge = new GalacticAge(56, 43);
        const galacticBirthday = new GalacticBirthday(galacticAge.birthday());
        expect(galacticBirthday.age).toEqual(13);
    });

     // pastOrFuture
     test("should create a pastOrFuture function that calculates years passed since birthday", () => {
        const galacticAge = new GalacticAge(56, 43);
        const galacticBirthday = new GalacticBirthday(galacticAge.birthday());
        galacticBirthday.pastOrFuture();
        expect(galacticBirthday.yearsPassed).toEqual([13, 54.16, 20.96, 6.91, 1.09]);
    });
    test("should calculate yearsToCome if its in the future", () => {
        const galacticAge = new GalacticAge(56, 61);
        const galacticBirthday = new GalacticBirthday(galacticAge.birthday());
        galacticBirthday.pastOrFuture();
        expect(galacticBirthday.yearsToCome).toEqual([5, 20.83, 8.06, 2.65, 0.42]);
    });
});