export class GalacticAge {
  constructor(age) {
    this.age = age;
    this.earthAge = this.earth();
  }

  earth() {
    return this.age;
  }
}