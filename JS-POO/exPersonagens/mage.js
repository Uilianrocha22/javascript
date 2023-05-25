const Character = require("./character");

class Mage extends Character {
  constructor(name, lifePts, attackPts, defensePts, magicPts) {
    super(name, lifePts, attackPts, defensePts);
    this.magicPts = magicPts;
  }

  attack(person) {
    person.lifePts -= this.attackPts + this.magicPts - person.defensePts;
  }

  mageLife(person) {
    person.lifePts += this.magicPts * 2;
  }
}

module.exports = Mage;
