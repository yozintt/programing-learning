// Escreva uma função chamada numerosPrimos(n) que recebe um número inteiro positivo n e retorna um array contendo todos os números primos de 2 até n.

// Regras:
// 	•	Um número primo é aquele que só é divisível por 1 e por ele mesmo.
// 	•	Use um loop for para verificar se cada número entre 2 e n é primo.
// 	•	Retorne um array contendo os números primos encontrados.

function numerosPrimos(n) {
  let numerosGuardados = [];

  for (let index = 2; index <= n; index++) {
    const ehPrimo = verificaSeONumeroehPrimo(index);

    if (ehPrimo == true) {
      numerosGuardados.push(index);
    }
  }

  return numerosGuardados;
}

function verificaSeONumeroehPrimo(n) {
  let ehPrimo = true;

  for (let index = 2; index < n; index++) {
    const ehDivisivel = n % index == 0;

    if (ehDivisivel) {
      ehPrimo = false;
    }
  }
  return ehPrimo;
}

// console.log(verificaSeONumeroehPrimo(27));
console.log(numerosPrimos(25));
