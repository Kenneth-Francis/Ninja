class Ninja {
  constructor(name) {
    this.name = name;
    this.health = 90;
    this.speed = 3;
    this.strength = 3;
  }

  sayName() {
    console.log(this.name);
    return this;
  }

  showStats() {
    console.log(`Name: ${this.name}\nHealth: ${this.health}\nSpeed: ${this.speed}\nStrength: ${this.strength}`);
    return this;
  }

  drinkSake() {
    console.log(`${this.name} drank sake. Health bolstered`);
    this.health += 10;
    return this;
  }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName().showStats().drinkSake().showStats();