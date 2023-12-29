"use strict";

let arr = ["a", "b", "c", "d", "e"];
// slice method
console.log(arr.slice(3));
console.log(arr.slice(2, 5).length);
console.log(arr.slice(-2));
console.log(arr.slice(1, -2));

console.log(arr.slice());
console.log([...arr]);

// splice method
// console.log(arr.splice(2));
// arr.splice(-1);
arr.splice(1, 2);
console.log(arr);

// reverse method
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());
console.log(arr2);

// concat method
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

//  join method
console.log(letters.join(" - "));

// ///////////////////////////////////

const movements = [200, 45, -400, 3000, -650, -140, 70, 1400];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdraw ${Math.abs(movement)}`);
  }
}

console.log("------ FOREACH ------");
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdraw ${Math.abs(mov)}`);
  }
});

// const [...all] = movements.entries();
// console.log(...all);

// for (const [i, movement] of movements.entries()) {
//   console.log(i, movement);
// }

// /////////////////////////////////////

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
  ["INR", "Rupees"],
]);
console.log(currencies);
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR", "INR"]);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});

//  CODING CHALLENGE
const dogsJulia = [10, 2, 4, 6, 7];
const dogsKate = [2, 5, 8, 3, 1];

// const [cat1, cat2, cat3] = [dogsJulia[0], dogsJulia[3], dogsJulia[4]];
// console.log(cat1, cat2, cat3);
console.log(dogsJulia);
// const [cat1, , , cat2, cat3] = dogsJulia;
// console.log(cat1, cat2, cat3);

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrect = dogsJulia.slice();
  dogsJuliaCorrect.splice(0, 1);
  dogsJuliaCorrect.splice(-2);
  // dogsJulia.slice(1, 3);
  console.log(dogsJuliaCorrect);

  const dogs = dogsJuliaCorrect.concat(dogsKate);
  console.log(dogs);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old.`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy.`);
    }
  });
};

checkDogs(dogsJulia, dogsKate);
checkDogs([9, 16, 4, 8, 1], [5, 6, 7, 2, 9]);

// challenge coding
const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map((dog, i, arr) =>
    dog <= 2 ? 2 * dog : 16 + dog * 4
  );
  const adults = humanAges.filter((dog, i, arr) => dog >= 18);
  // const average = adults.reduce(
  //   (acc, dog, i, arr) => (acc = dog / arr.length),
  //   0
  // );
  const average = adults.reduce(
    (acc, dog, i, arr) => acc + dog / arr.length,
    0
  );
  return average;
};
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([6, 16, 10, 5, 6, 1, 4]);

console.log(avg1, avg2);
// /
const calcAverageHumanAge2 = (ages) =>
  ages
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const avg = calcAverageHumanAge2([6, 16, 10, 5, 6, 1, 4]);
console.log(avg);
////////////////////////////////////////////////////////////////

const average = function (ages) {
  const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  console.log(humanAges);
  const adults = humanAges.filter((age) => age >= 18);
  console.log(adults);
  const avg = adults.reduce((acc, age, i, arr) => {
    console.log(arr.length);
    console.log(age);
    console.log(i);
  });
  console.log(avg);
};
average([5, 2, 1, 15, 8, 3]);
// ////////////////////////////////////////////////
//  Higher Order Array Method
let array = [45, 25, 89, 26];
let a = array.map(function (value, i, arr) {
  console.log(value, i, arr);
  return value + 1;
});
console.log(a);

const array2 = [49, 58, 67, 79, 12, 1, 0, 8, 4];
const filter = array2.filter(function (value, i, arr) {
  // console.log(value, i, arr);
  return value > 20;
});
console.log(filter);

const array3 = [5, 9, 1, 4, 3, 6, 8, 8];
const reduce_func = (h1, h3) => {
  return h1 + h3;
};
// array3.reduce(function (h1, h2) {
//   console.log(h1, h2);
// });
let newarr3 = array3.reduce(reduce_func);
console.log(newarr3);

const numbers = [12, 2, 5, 63, 50, 100, 45, 85];
let newNumber;
// do {
// newNumber = parseInt(prompt("Your number"));
numbers.push(newNumber);
// } while (newNumber != 0);

console.log(numbers);
const numFilter = numbers.filter((value, index, arr) => {
  // if (value % 5 !== 0) {
  //   return value;
  //   45;
  // }
  return value % 10 == 0;
});
console.log(numFilter);

const array0 = [10, 55, 66, 33, 44, 77, 88];
array0.map((value, i, arr) => {
  return value ** 2;
});

//
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const factorial = nums.reduce((x1, x2) => {
//   return x1 * x2;
// });
// console.log(factorial);
//

// finding factorial of number
const factorial = function (number) {
  let num = number;
  let count = [num];

  for (let i = num; i >= 2; i--) {
    num = num - 1;
    count.push(num);
  }
  console.log(count);

  return count.reduce((n1, n2) => {
    return n1 * n2;
  });
};

const answer = factorial(Number(prompt("your number?")));
console.log(answer);
//
// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map((age) => (age >= 2 ? 2 * age : 16 + age * 4));
//   console.log(humanAges);
//   const adults = humanAges.filter((age) => age >= 18);
//   console.log(adults);
//   const average = adults.reduce(
//     (acc, age, i, arr) => acc + age / arr.length,
//     0
//   );

//   return average;
// };
// const averageAge = calcAverageHumanAge([10, 18, 45, 36, 51, 15, 18, 9]);
// console.log(averageAge);
