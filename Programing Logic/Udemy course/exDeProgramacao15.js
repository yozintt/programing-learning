// Encontrar o maior número em um array
// Crie uma função chamada findMaxNumber que recebe como parâmetro um array de números.
// A função deve retornar o maior número presente no array.

function findMaxNumber(arr) {
  let greater = [0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > greater) {
      greater = arr[i];
    }
  }
  return greater;
}
console.log(findMaxNumber([1, 2, 3, 4, 5, 6]));
