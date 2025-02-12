// 9. Sequência de Fibonacci
// Faça um programa que:
// Peça um número ao usuário. Mostre os primeiros números da sequência de Fibonacci.
// condiçao inicial primeiro termo e segundo termo sao iguais a 1, segunda condiçao é que após o 3 termo, é a soma dos 2 termos antecessores.
function Fibonacci(numero) {
  let n1 = 1;
  let n2 = 1;
  let ultimoTermo;

  if (numero < 3) {
    return n1 || n2;
  } else if (numero >= 3) {
    for (let n = 3; n <= numero; n++) {
      let f = n1 + n2;
      n1 = n2;
      n2 = f;
      ultimoTermo = f;
    }
    return ultimoTermo;
  }
}
console.log(Fibonacci(5));
