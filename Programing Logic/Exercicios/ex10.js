// 10. Jogo de Adivinhação
// Escreva um programa que:
// 1. Gera um número aleatório entre 1 e 100 (ou peça ao usuário definir o limite).
// 2. Permita que o usuário tente adivinhar o número.
// 3. Dê dicas de "maior" ou "menor" até que o número seja acertado.
const numeroA = Math.floor(Math.random() * 100) + 1;
const resposta = 33;
if (numeroA > resposta) {
  console.log(`${resposta} é MENOR, tente mais uma vez!`);
} else if (numeroA < resposta) {
  console.log(`${resposta} é MAIOR, tente mais uma vez!`);
} else {
  console.log(`Vocé acertou, o número gerado foi ${numeroA}`);
}
