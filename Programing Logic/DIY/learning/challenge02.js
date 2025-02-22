// fix challenge01 problems, making it more usuable for multiples datas:
/*
function dataStructure(day, month, year) {
  return {
    day: day,
    month: month,
    year: year,
    dataPattern: function () {
      return `${this.day}/${this.month}/${this.year}`;
    },
  };
}
*/

// more updated form
function dataStructure(day, month, year) {
  return {
    day,
    month,
    year,
    dataPattern() {
      return `${this.day}/${this.month}/${this.year}`;
    },
  };
}

const data1 = dataStructure(3, 5, 1997);
const data2 = dataStructure(1, 1, 1999);

console.log(data1.dataPattern(), data2.dataPattern());

console.log(dataStructure());
