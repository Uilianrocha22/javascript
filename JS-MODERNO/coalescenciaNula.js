// operador de coalescenciNula só ignora (null ou undefined)

const a = 0; // 0 === false na operação lógica , porém 0 não é nulo

const b = null; // null === false

const c = "teste"; // string === true

const d = undefined; // ===  undefined

console.log(a || b || c);
console.log(a ?? b ?? c);
console.log(b ?? d ?? a);
console.log(d ?? b ?? c);

let A = 0;
let B = A || 42;
let C = A ?? 42;

console.log({ A, B });
console.log({ A, C });
