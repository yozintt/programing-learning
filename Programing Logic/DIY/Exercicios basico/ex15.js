// 15. Números Primos
// Crie um programa que:
// 1. Peça um número inteiro ao usuário.
// 2. Informe se o número é primo ou não.
const numero = 12;
const numeroIn = Math.floor(numero);

if (numero != numeroIn) {
  console.log(
    `O número ${numeroIn} não é um numero inteiro, tente mais uma vez!`
  );
} else if (numeroIn % numeroIn) {
  true;
} else if (numeroIn % 2) {
  false;
} else if (numeroIn % 3) {
  false;
} else if (numeroIn % 1) {
  true;
}
