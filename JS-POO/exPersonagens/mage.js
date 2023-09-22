const Character = require("./character");

class Mage extends Character {
  constructor(name, lifePts, attackPts, defensePts, magicPts) {
    super(name, lifePts, attackPts, defensePts);
    this.magicPts = magicPts;
  }

  attack(targetPerson) {
    targetPerson.lifePts -=
      this.attackPts + this.magicPts - targetPerson.defensePts;
  }

  mageLife(targetPerson) {
    targetPerson.lifePts += this.magicPts * 2;
  }
}

module.exports = Mage;
