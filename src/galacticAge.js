export class GalacticAge {
  constructor(age) {
    this.age = age;
    this.earthAge = this.earth();
    this.mercuryAge = this.mercury();
  }

  earth() {
    return this.age;
  }

  mercury() {
    const mercuryAge = (1 / 0.24) * this.age;
    return Math.floor(mercuryAge * 100) / 100;
  }
}