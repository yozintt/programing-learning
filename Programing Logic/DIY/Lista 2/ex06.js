// fazer um gerador de senha aleatoria: usando a função math.() e um loop com o tamanho da senha
function senhaAleatoria(tamanhoDaSenha) {
  const exemploDeCaracteres = "0123456789";
  let senha = "";

  for (let n = 0; n < tamanhoDaSenha; n++) {
    const numeroAleatorio = Math.floor(
      Math.random() * exemploDeCaracteres.length
    );
    senha += exemploDeCaracteres[numeroAleatorio];
  }
  return senha;
}

console.log(senhaAleatoria(9));
