const numero = 17;
let divisoes = 0;

for (let i = 0; i <= numero; i++) {
  if (numero % i == 0) {
    divisoes++;
  }
}
if (divisoes == 2) {
  console.log(`${numero} é primo`);
} else {
  console.log(`${numero} não e primo`);
}
