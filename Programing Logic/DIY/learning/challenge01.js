const data = {
  dia: 1,
  mes: 1,
  ano: 1001,
  dataFormatada: function () {
    return `${this.dia}/${this.mes}/${this.ano}`;
  },
};
console.log(date.dataFormatada());
