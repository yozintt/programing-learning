// Contagem de Vogais
// Escreva uma função chamada countVowels que recebe uma string como argumento.
// A função deve contar o número de vogais presentes na string (considerando letras maiúsculas e minúsculas).
// A função deve retornar o total de vogais encontradas.

function countVowels(string) {
  let saveString = "";
  let saveVowels = "";

  const stringNormalized = string.toLowerCase();

  for (let s = 0; s < string.length; s++) {
    saveString += stringNormalized[s];

    if (
      stringNormalized[s] == "a" ||
      stringNormalized[s] == "e" ||
      stringNormalized[s] == "i" ||
      stringNormalized[s] == "o" ||
      stringNormalized[s] == "u"
    ) {
      saveVowels += stringNormalized[s];
    }
  }

  return saveVowels.length;
}
console.log(countVowels("Yoander"));
