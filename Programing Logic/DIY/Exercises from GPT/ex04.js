// 4️⃣ Inverter String
// Crie uma função chamada reverseString que recebe uma string como parâmetro e retorna essa string invertida.
function reverse(word) {
  let reversedString = "";
  for (let w = word.length - 1; w >= 0; w--) {
    reversedString += word[w];
  }
  console.log(word);

  return reversedString;
}
console.log(reverse("yoander"));
