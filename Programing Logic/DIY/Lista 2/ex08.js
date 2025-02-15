// calculo de desconto: calcular o preço final de um produto com desconto percentual.
function desconto(valorDoObjeto, desconto) {
  console.log("Valor do seu objeto: " + valorDoObjeto + "\n");
  valorComDesconto = desconto / 100;
  return "seu valor final é: " + valorDoObjeto * valorComDesconto;
}

console.log(desconto(25000, 40));
