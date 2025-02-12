// 3. Tabuada
// Crie um programa que: Peça um número ao usuário. Mostre a tabuada (de 1 a 10) desse número.

const numero = 2;

console.log(`Tabuado de ${numero}`);

for (let c = 1; c <= 10; c++) {
  console.log(`${numero} x ${c} = ${numero * c}`);
}
