// conversor de Euro para dolar
function conversor(moeda, quantia) {
  if (moeda == "euro") {
    return quantia * 1.0371;
  } else if (moeda == "dollar") {
    return quantia * 0.9642;
  } else {
    console.log("digite uma moeda seguida de um valor");
  }
}
console.log(conversor("dollar", 500));
