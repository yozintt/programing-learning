// Remover elementos duplicados de um array
// Crie uma função chamada removeDuplicates que recebe como parâmetro um array de elementos.
// A função deve remover os elementos duplicados do array, mantendo apenas as ocorrências únicas.

function removeDuplicates(array) {
  let diffNumbers = [];
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    let rep = 0;
    for (let j = 0; j < array.length; j++) {
      const itemLoop = array[j];
      if (item === itemLoop) {
        rep++;
        console.log(rep, array[i], array[j]);
      }
    }
    if (rep === 1) {
      diffNumbers.push(item);
    }
  }
  return diffNumbers;
}
console.log(removeDuplicates(["a", "b", "a", 6, -2]));
