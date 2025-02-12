const arrayObject = [
  { name: "Yoander", age: 28, income: 27000, driverLicense: true, gen: "M" },
  { name: "Amanda", age: 26, income: 0, driverLicense: true, gen: "F" },
  { name: "Johannes", age: 26, income: 20000, driverLicense: true, gen: "M" },
  { name: "Lais", age: 24, income: 10000, driverLicense: true, gen: "F" },
  { name: "zezin", age: 3, income: 0, driverLicense: false, gen: "M" },
];
// console.log(arrayObject);

//  classificando por idade:

const sortedArrayObject = arrayObject.sort((a, b) => {
  return a.age - b.age;
});

console.log(sortedArrayObject);

// revertendo o objeto:
/*

const reverseArrayObject = arrayObject.reverse();
console.log(reverseArrayObject);
*/

/*
// classificando o array
const sortArrayObject = arrayObject.sort();
console.log(sortArrayObject);
*/

function test() {
  const number = [0, 10, 8, 12, 2, 5];
  const sorted = number.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
  console.log(sorted);
  const numbersReverse = number.reverse();
  console.log(numbersReverse);

  /*for (let i = 0; i < number.length; i++) {
    const element = number[i];
    console.log(element); */
}
return test();
