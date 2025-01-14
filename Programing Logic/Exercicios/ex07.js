// 7. Média de Notas
// Crie um programa que: Peça três notas de um aluno. Calcule e exiba a média. Informe se o aluno foi aprovado (média maior ou igual a 7) ou reprovado.

const nota1 = 7;
const nota2 = 9;
const nota3 = 5;
const media = (nota1 + nota2 + nota3) / 3;

console.log(`A sua média é igual à: ${media.toFixed(2)}`);

if (media >= 7) {
  console.log(
    `Sua média é igual ou maior que 7, você está aprovado, parabens! `
  );
} else {
  console.log(
    `Infelizmente a sua média e menor que 7, voce esta reprovado, boa sorte na sua proxima vez.`
  );
}
