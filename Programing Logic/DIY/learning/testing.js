const number = [0, 10, 8, 12, 2, 5];
const sorted = number.sort((a, b) => {
  return a - b;
});
/* Forma implicita:
const sorted = number.sort((a, b) => a - b);
Forma decrescente:
const sorted = number.sort((a, b) => b - a);
*/
console.log(sorted);
