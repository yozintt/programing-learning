const nota1 = 7.8;
const nota2 = 3.1;
const nota3 = 6.7;

function minimo(n1, n2) {
  return n1 <= n2 ? n1 : n2;
}
console.log(minimo(nota1, minimo(nota2, nota3)));
