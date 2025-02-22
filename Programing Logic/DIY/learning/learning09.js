// class applied to challenge 1 and 2
class Data {
  //   day = 1;
  //   month = 1;
  //   year = 1970;

  constructor(day = 1, month = 1, year = 1970) {
    this.day = day;
    this.month = month;
    this.year = year;
  }
  // can't use "Word" function:
  showDataPattern() {
    return `${this.day}/${this.month}/${this.year}`;
  }
}

// metod without constructor form:
const d1 = new Data();

d1.day = 3;
d1.month = 5;
d1.year = 1997;
console.log(d1);

// data with contructor form:
const d2 = new Data(1, 1, 1999);
console.log(d2);

// data formated to new pattern:
console.log(d1.showDataPattern(), d2.showDataPattern());
