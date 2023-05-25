const Character = require("./character");

class Warrior extends Character {
  constructor(name, lifePts, attackPts, defensePts, shieldPts) {
    super(name, lifePts, attackPts, defensePts);
    this.shieldPts = shieldPts;
    this.position = "attacking";
  }

  attack(person) {
    if (this.position === "attacking") {
      person.lifePts -= this.attackPts - person.defensePts;
    }
  }

  switchStance() {
    if (this.position === "attacking") {
      this.position = "defending";
      this.defensePts += this.shieldPts;
    } else {
      this.position = "attacking";
      this.defensePts -= this.shieldPts;
    }
  }
}

module.exports = Warrior;
