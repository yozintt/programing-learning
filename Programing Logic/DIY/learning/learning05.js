// Foreach:
/*let exemple = [0, 1, 2, 3, 4, 5, 26, 34];
for (exemples of exemple) {
  console.log(exemples);
}*/
// const example = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// for (let i = example.length - 2; i >= 0; i--) {
//   console.log(example[i]);
// }
// console.log("\n");

function backwards() {
  const example = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  example.push(6, 5, 4, 3, 2);
  example.splice(9, 15);
  for (let i = example.length - 1; i >= 0; i--) {
    console.log(example[i]);
  }
}
backwards();
console.log("\n");
const example2 = [1, 2, 3, 4, 5, 6, 7, 8];
for (let i = example2.length - 1; i >= 0; i--) {
  console.log(example2[i]);
}
example2.forEach(function (_, i) {
  console.log(i);
});
