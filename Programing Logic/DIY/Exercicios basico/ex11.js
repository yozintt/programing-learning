// 11. Soma de Ímpares
// Faça um programa que:
// 1. Solicite um número inteiro positivo.
// 2. Calcule e exiba a soma de todos os números ímpares até esse número.

const numero = 7;
const numeroIn = Math.floor(numero);
if (numero < 0) {
  console.log(`${numero} é negativo, tente com outro maior que zero`);
} else if (numero != numeroIn) {
  console.log(
    `${numero} não é um numero inteiro, precisamos de um numero inteiro.`
  );
} else {
  let c = 1;
  do {
    if (c % 2 != 0) {
      console.log(c);
    }
    c++;
  } while (c <= numeroIn);
}
