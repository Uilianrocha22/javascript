class Character {
  constructor(name, lifePts, attackPts, defensePts) {
    this.name = name;
    this.lifePts = lifePts;
    this.attackPts = attackPts;
    this.defensePts = defensePts;
  }

  attack(targetPerson) {
    targetPerson.lifePts -= this.attackPts - targetPerson.defensePts;
  }
}

module.exports = Character;
