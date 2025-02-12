function numeroParOuImpar(numero) {
  if (numero % 2 == 0) {
    return console.log(`${numero} é par!`);
  } else if (numero % 2 == 1) {
    return console.log(`${numero} é Impar!`);
  }
}

numeroParOuImpar(12);
