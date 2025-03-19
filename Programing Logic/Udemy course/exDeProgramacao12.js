// Soma de Números Pares
// Escreva uma função chamada sumEvenNumbers que recebe um array de números como argumento.
// A função deve calcular e retornar a soma de todos os números pares presentes no array.
// Utilize o operador de módulo (%) para determinar se um número é par.
// Considere que o array pode conter tanto números inteiros positivos quanto negativos.
// Dica: Para verificar se um número é par, você pode usar a expressão numero % 2 === 0, onde % é o operador de módulo que retorna o resto da divisão.

function sumEvenNumbers(numbers) {
  let saveNumbers = 0;
  for (let c = 0; c < numbers.length; c++) {
    if (numbers[c] % 2 === 0) {
      saveNumbers += numbers[c];
    }
  }
  return saveNumbers;
}
console.log(sumEvenNumbers([1, 3, 7, 2, 4, 6, -8, 9]));
