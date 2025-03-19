function monthOfTheYear() {
  let months = [
    "Not a Month, try again",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let monthsInNumber = [];

  for (let m = 0; m < months.length; m++) {
    if (m != 0) {
      const objeto = {
        mesEmNumero: m,
        mes: months[m],
      };
      monthsInNumber.push(objeto);
    }
  }

  return monthsInNumber;
}
