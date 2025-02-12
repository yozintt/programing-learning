// 13. Fatorial
// Peça um número ao usuário e calcule o seu fatorial (ex.: 5! = 5 × 4 × 3 × 2 × 1).
function fatorial(numero) {
  let nFatorial = numero;
  for (let n = numero - 1; n >= 1; n--) {
    nFatorial *= numero;
  }
  return nFatorial;
}
console.log(fatorial(5));
