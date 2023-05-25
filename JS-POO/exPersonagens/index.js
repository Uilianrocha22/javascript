const Mage = require("./mage");
const Thief = require("./thief");
const Warrior = require("./warrior");

const arthur = new Mage("Arthur", 90, 4, 2, 14);

const beatrice = new Thief("Beatrice", 140, 22, 8);

const cain = new Warrior("Cain", 200, 14, 12, 4);

console.table({ arthur, beatrice, cain });
cain.switchStance();
arthur.attack(cain);
beatrice.attack(arthur);

console.table({ arthur, beatrice, cain });

cain.switchStance();
cain.attack(arthur);

console.table({ arthur, beatrice, cain });
arthur.mageLife(arthur);
beatrice.attack(cain);
console.table({ arthur, beatrice, cain });
