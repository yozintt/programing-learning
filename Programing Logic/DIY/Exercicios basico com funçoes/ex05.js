function maiorNumero(numeros) {
  let maiorNumero = 0;
  for (let n = 0; n < numeros.length; n++) {
    const valorAtual = numeros[n];

    if (valorAtual > maiorNumero) {
      maiorNumero = valorAtual;
    }
  }
  console.log(maiorNumero);
}
maiorNumero([1, 3, 5, 5, 8, 35, 43, 10]);
