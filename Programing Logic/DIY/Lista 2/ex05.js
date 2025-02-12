// calculo de IMC altura e peso: divide o peso pela altura elevado ao quadrado
function calculoIMC(altura, peso) {
  let iMC = peso / (altura * altura);
  console.log(Number(iMC.toFixed(2)));
  if (iMC < 16) {
    return console.log(`Você está com magresa grave`);
  } else if (iMC <= 16.9) {
    return console.log(`Você está com magresa moderada`);
  } else if (iMC <= 18.4) {
    return console.log(`Você está com magresa leve`);
  } else if (iMC <= 29.9) {
    return console.log(`Você está com sobre peso`);
  } else if (iMC <= 34.9) {
    return console.log(`Você está com obesidade grau 1`);
  } else if (iMC <= 39.9) {
    return console.log(`Você está com obesidade severa`);
  } else if (iMC >= 40) {
    return console.log(`Você está com obesidade mórbida`);
  }
}
calculoIMC(1.78, 80);
