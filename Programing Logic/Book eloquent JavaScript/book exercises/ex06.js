// Bean counting
function countBs(string, ch) {
  let saveString = 0;
  for (let c = 0; c < string.length; c++) {
    if (string[c] == ch) {
      saveString += 1;
    }
  }
  return saveString;
}
function reUseit(string) {
  return countBs(string, "B");
}
console.log(reUseit("BOB"));
