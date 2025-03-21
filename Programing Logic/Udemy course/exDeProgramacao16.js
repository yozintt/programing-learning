// Soma de Números Únicos
// Escreva uma função chamada sumUniqueNumbers que recebe um array de números como argumento.
// A função deve calcular e retornar a soma de todos os números que aparecem apenas uma vez no array.
// Utilize uma estrutura de dados auxiliar para armazenar a contagem de cada número no array.
// Percorra o array e verifique se cada número ocorre apenas uma vez. Se sim, some-o à variável de soma.
// Considere que o array pode conter tanto números inteiros positivos quanto negativos.

function sumUniqueNumbers(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    let rep = 0;
    for (let j = 0; j < arr.length; j++) {
      const itemLoop = arr[j];
      if (item == itemLoop) {
        rep += 1;
      }
    }

    if (rep == 1) {
      sum += item;
    }
  }
  return sum;
}

console.log(sumUniqueNumbers([-2, 2, 4, 6, -2]));

// pega o -2 e compara com o -2.
// verifica se são iguais
// pega o -2 e compara com o 2
// verifica se são iguais
// pega o -2 e compara com o 4
// verifica se são iguais

// pega o 2 e compara com o -2.
// verifica se são iguais
// pega o 2 e compara com o 2
// verifica se são iguais
// pega o 2 e compara com o 4
// verifica se são iguais

// pega o 4 e compara com o -2.
// verifica se são iguais
// pega o 4 e compara com o 2
// verifica se são iguais
// pega o 4 e compara com o 4
// verifica se são iguais
