function senhaAleatoria(tamanho) {
  let exemplo = Date.now().toString();

  let senha = "";
  for (let s = 0; s < tamanho; s++) {
    senha += exemplo[s + 9];
  }
  return senha;
}
console.log(senhaAleatoria(1));
