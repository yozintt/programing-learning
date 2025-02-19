// juros compostos com aporte mensal ate o quinto mes
function jurosComposto(capital, taxa, tempo, aporte) {
  let resultado = capital;
  let aporteT = 0;
  let aporteSoma = 0;
  let capitalT = 0;
  for (let j = 1; j <= tempo; j++) {
    if (j >= 2 && j <= 6) {
      aporteT = (taxa / 100) * aporte + aporte;
      resultado = resultado + (taxa / 100) * resultado + aporteT;
      capitalT += capital;
      aporteSoma += aporteT;
    } else {
      resultado = resultado + (taxa / 100) * resultado;
    }
  }
  console.log(
    "Total em Aporte: " + aporteSoma + "\n Total em capital: " + capitalT
  );

  return "Seu valor total de rendimento: " + resultado;
}
console.log(jurosComposto(10000, 10, 7, 1000));
