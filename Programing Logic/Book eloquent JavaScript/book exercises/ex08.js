// Your code here.
function range(start, end, step) {
  let arr = [];
  let arrStep = [];
  if (start > 0) {
    for (let r = start; r <= end; r++) {
      arr.push(r);
    }
    return arr;
  }
}
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
// console.log(sum(range(1, 10)));
// → 55

//vou pegar um numero inicial e fazer uma soma ate o numero final
//quando o numero inicial for maior que o numero inicial, entao ira parar de incrementar
//caso tenha um step, entao o valor sera incrementado ou decrementado, step by step
