function range(start, end, step) {
  let arr = [];
  let arrStep = [];
  let sumArr = 0;
  for (let r = start; r <= end; r++) {
    arr.push(r);
    sumArr += r;
  }
  if (step < 0) {
    for (let j = start; j >= end; j += step) {
      arrStep.push(j);
    }
    return arrStep;
  }
  if (sum(start, end) === true) {
    return sumArr;
  }
  return arr;
}

function sum(start, end) {
  return range(start, end);
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

//vou pegar um numero inicial e fazer uma soma ate o numero final
//quando o numero inicial for maior que o numero inicial, entao ira parar de incrementar
//caso tenha um step, entao deve ser verificado se é positiovo, se sim, qual o valor de incrementaçoes.
//caso tenha um step, entao deve ser verificado se é positivo, se não, entao deve se verificar se é negativo, se sim
// verificar o valor de vezes que ira decrementar.
