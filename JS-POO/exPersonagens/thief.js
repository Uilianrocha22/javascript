const Character = require("./character");

class Thief extends Character {
  // constructor(name, lifePts, attackPts, defensePts) {
  //   super(name, lifePts, attackPts, defensePts);
  // }

  attack(targetPerson) {
    targetPerson.lifePts -= (this.attackPts - targetPerson.defensePts) * 2;
  }
}

module.exports = Thief;
