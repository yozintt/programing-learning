// 6. Calculadora Simples
// Crie um programa que:
// 1. Solicite dois números e uma operação (adição, subtração, multiplicação ou divisão).
// 2. Realize a operação indicada e mostre o resultado.

// Adição:

const n1 = 9;
const n2 = 7;
const soma = n1 + n2;
const sub = n1 - n2;
const mult = n1 * n2;
const div = n1 / n2;

let op = sub;

if (op == mult) {
  console.log(`A multiplicacao entre ${n1} e ${n2} é igual ${mult}`);
} else if (op == div) {
  console.log(`A divisao entre ${n1} e ${n2} é igual ${div}`);
} else if (op == soma) {
  console.log(`A soma entre ${n1} e ${n2} é igual ${soma}`);
} else {
  console.log(`A sub entre ${n1} e ${n2} é igual ${sub}`);
}
