class Ninja {
  constructor(name) {
    this.name = name;
    this.health = 90;
    this.speed = 3;
    this.strength = 3;
  }
  sayName = () => console.log(this.name);
  showStats = () => console.log(`Name: ${this.name}\nHealth: ${this.health}\nSpeed: ${this.speed}\nStrength: ${this.strength}`);
  drinkSake = () => this.health += 10;
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();     // logs name of ninja
ninja1.showStats();   // shows all properties and values of ninja
ninja1.drinkSake();   // adds 10 health to ninja
ninja1.showStats();   // shows all properties and values of ninja
