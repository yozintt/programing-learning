// Escreva uma função chamada calculateAverage que recebe um array de números como argumento.
// A função deve calcular a média dos números no array.
// A média é calculada somando todos os números e dividindo pelo total de números no array.
// A função deve retornar o valor da média calculada.
function calculateAverage(array) {
  let salvarArray = 0;
  let quantidadeArray = 0;
  for (let a = 0; a < array.length; a++) {
    salvarArray += array[a];
    quantidadeArray = a;
    console.log(a);
    console.log(salvarArray);
  }
  return salvarArray / array.length;
}
console.log(calculateAverage([1, 5, 6, 7, 10]));
