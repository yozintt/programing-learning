// FizzBuzz exercise:
/*
Couting til 100 putting on side of multiples by 3 "fizz", by 5 "buzz"" and by 3 && 5 "fizzbuzz"
*/
for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0) console.log(`${i} fizz`);
  else if (i % 5 == 0) console.log(`${i} buzz`);
  else if (i % 3 == 0 && i % 5 == 0) console.log(`${i} fizzbuzz`);
  else console.log(i);
}
