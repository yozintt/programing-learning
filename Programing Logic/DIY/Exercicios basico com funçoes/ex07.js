function mediaDeNotas(medias) {
  let soma = 0;
  for (let m = 0; m < medias.length; m++) {
    soma += medias[m];
  }
  return soma / medias.length;
}
console.log(mediaDeNotas([6, 8, 5]));
