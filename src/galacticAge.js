export class GalacticAge {
  constructor(age) {
    this.age = age;
    this.earthAge = this.earth();
    this.mercuryAge = this.mercury();
    this.venusAge = this.venus();
    this.marsAge = this.mars();
  }

  earth() {
    return this.age;
  }
  mercury() {
    const mercuryAge = (1 / 0.24) * this.age;
    return Math.floor(mercuryAge * 100) / 100;
  }
  venus() {
    const venusAge = (1 / 0.62) * this.age;
    return Math.floor(venusAge * 100) / 100;
  }
  mars() {
    return 0;
  }
}