// Escreva uma função chamada isPalindrome que recebe uma palavra como argumento.
// A função deve verificar se a palavra é um palíndromo.
// Um palíndromo é uma palavra que é lida da mesma forma tanto da esquerda para a direita quanto da direita para a esquerda.
// A função deve retornar true se a palavra for um palíndromo e false caso contrário.
// Por exemplo:
// isPalindrome('radar') deve retornar true.
// isPalindrome('hello') deve retornar false.

function isPalindrome(palavra) {
  let palavraInversa = palavra.split("").reverse().join("");

  if (palavraInversa == palavra) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome("ama"));

//  soluçao sem os metodos:

function isPalindrome2(palavra) {
  palavraInvertida = "";
  for (let p = palavra.length - 1; p >= 0; p--) {
    palavraInvertida += palavra[p];
  }
  if (palavraInvertida == palavra) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome2("radar"));
console.log(isPalindrome2("hello"));
