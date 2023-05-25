const Character = require("./character");

class Thief extends Character {
  constructor(name, lifePts, attackPts, defensePts) {
    super(name, lifePts, attackPts, defensePts);
  }

  attack(person) {
    person.lifePts -= (this.attackPts - person.defensePts) * 2;
  }
}

module.exports = Thief;
