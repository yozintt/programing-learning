// verificador de ano bissexto: verifica se o ano e bissexto ou de 4 em 4 anos ou verificando os dias, todo ano que tiver 366 dias
function anoBissexto(year) {
  const ano = year;

  if (ano % 4 == 0) {
    if (ano % 100 != 0) {
      return ano + " Ano é Bissexto";
    }
  } else {
    return ano + " Ano não bissexto";
  }
}
console.log(anoBissexto(2025));
