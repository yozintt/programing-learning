// Inverter string
// Escreva uma função chamada reverseString que recebe uma string como argumento.
// A função deve inverter a ordem dos caracteres na string.
// A função deve retornar a string invertida.
function reverseString(palavra) {
  let palavraSalva = "";
  for (let p = palavra.length - 1; p >= 0; p--) {
    palavraSalva += palavra[p];
  }
  return palavraSalva;
}
console.log(reverseString("Yo"));
