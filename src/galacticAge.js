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
    return 0;
  }
}