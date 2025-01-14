// 5. Número Maior
// Escreva um programa que receba três números e informe qual deles é o maior.

const n1 = 3;
const n2 = 7;
const n3 = 9;

console.log(`Seus 3 números são: ${n1}, ${n2} e ${n3}`);

let maior;

if (n1 >= n2 && n1 >= n3) {
  maior = n1;
} else if (n2 >= n1 && n2 >= n3) {
  maior = n2;
} else {
  maior = n3;
}
console.log(`O número maior é: ${maior} !`);
