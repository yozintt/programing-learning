function palindromo(nome) {
  let nomeReverso = nome.split("").reverse().join("");
  if (nome === nomeReverso) {
    return console.log(`${nome} é um palindromo - ${nomeReverso}`);
  } else {
    return console.log(`${nome} não é um palindromo - ${nomeReverso}`);
  }
}
palindromo("amanda");
