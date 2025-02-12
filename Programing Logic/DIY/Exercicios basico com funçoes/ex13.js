function fatorial(numero) {
  let nFatorial = numero;
  for (let n = numero - 1; n >= 1; n--) {
    nFatorial *= n;
  }
  return nFatorial;
}
console.log(fatorial(5));
