function step02() {
  console.log(`Passo 02`);
}

console.log(`Passo 01`);
step02();
console.log(`Passo 03`);

console.log(`Passo 04`);
setTimeout(() => {
  console.log(`Passo 05`);
}, 1000 * 1);
console.log(`Passo 06`);
