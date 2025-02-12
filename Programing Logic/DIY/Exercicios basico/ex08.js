// 8. Verificador de Palíndromo
// Peça ao usuário uma palavra e verifique se ela é um palíndromo (ex.: "ana", "arara").

const palavra = "arara";
const invertida = palavra.split("").reverse().join("");

console.log(invertida);

if (palavra === invertida) {
  console.log(`A sua palavra ${palavra} é um palíndromo`);
} else {
  console.log(`A sua palavra ${palavra} não é um palíndromo`);
}
