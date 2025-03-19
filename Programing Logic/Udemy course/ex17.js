function classificarNumero(numero) {
  if (numero == 0) {
    return "Neutro";
  }
  if (numero < 0) {
    return "Negativo";
  }
  if (numero > 0) {
    if (numero % 2 == 0) {
      return "Positivo e Par";
    } else {
      return "Positivo e Impar";
    }
  }
}
console.log(classificarNumero(3));
