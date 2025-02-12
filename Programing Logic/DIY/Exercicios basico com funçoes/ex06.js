function calculadora(n1, n2, operacao) {
  if (operacao == "soma") {
    return n1 + n2;
  } else if (operacao == "divisao") {
    return n1 / n2;
  } else if (operacao == "multiplicacao") {
    return n1 * n2;
  } else if (operacao == "subtracao") {
    return n1 - n2;
  } else {
    return "faltando operação";
  }
}
console.log(calculadora(1, 3, "subtracao"));
