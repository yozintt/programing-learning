// Challenge 01 and 02, applying new concepts of Objects to functions in this challegens:
function Data(day = 1, month = 1, year = 1990) {
  this.day = day;
  this.month = month;
  this.year = year;

  this.showDatada = function () {
    return `${this.day}/ ${this.month} / ${this.year}`;
  };
}

const d1 = new Data();
const d2 = new Data(3, 5, 1997);
const d3 = new Data(1, 1, 1999);
d1.year = 1970;
console.log(d1, d2, d3);
console.log(d1.showDatada(), "\n", d2.showDatada(), "\n", d3.showDatada());
console.log();
