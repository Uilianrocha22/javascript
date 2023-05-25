class Character {
  constructor(name, lifePts, attackPts, defensePts) {
    this.name = name;
    this.lifePts = lifePts;
    this.attackPts = attackPts;
    this.defensePts = defensePts;
  }

  attack(person) {
    person.lifePts -= this.attackPts - person.defensePts;
  }
}

module.exports = Character;
