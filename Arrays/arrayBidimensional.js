let arr = [
  "1° nivel",
  ["2° nivel", 42, true],
  [
    ["3° nivel, 1° item", "olá, mundo"],
    ["3° nivel, 2° item", "oi, mundo"],
  ],
  [],
];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[1][1]);
console.log(arr[2]);
console.log(arr[2][1][0]);

let matriz = [
  ["l1 c1", "l1 c2", "l1 c3", "l1 c4"],
  ["l2 c1", "l2 c2", "l2 c3", "l2 c4"],
  ["l3 c1", "l3 c2", "l3 c3", "l3 c4"],
];

// console.log(matriz);
// console.log(matriz[0]);
// console.log(matriz[0][2]);
// console.log(matriz[1]);
// console.log(matriz[1][3]);

// console.table(matriz);

// matriz[0].push("l1 c5");
// matriz[1].push("l2 c5");

// console.table(matriz);

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[0].length; j++) {
    let elemento = matriz[i][j];
    console.log(`posição: ${i} , ${j} ) valor: ${elemento}`);
  }
}
