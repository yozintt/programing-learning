// calcular juros simples: Juros = Capital * taxa de juros * tempo
function jurosSimples(capital, taxa, tempo) {
  let resultado = 0;

  for (let t = 1; t <= tempo; t++) {
    resultado = resultado + capital * (taxa / 100);
  }
  return resultado;
}
console.log(jurosSimples(1000, 10, 3));
