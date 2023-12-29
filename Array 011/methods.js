"use strict";

//The MAP METHOD

const movements = [200, 450, -400, 3000, -700, -140, 70, 1300];
const eurToUsd = 1.1;
// const movementsUSD = movements.map(function (value, i, arr) {
//   // console.log(value, i, arr);
//   return value * eurToUsd;
//   // return 29;
// });
const movUSD = movements.map((mov) => mov * eurToUsd);
console.log(movements);
console.log(movUSD);
//
const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

const movementsDescription = movements.map((mov, i, arr) => {
  return `Movement ${i + 1}: You ${
    mov > 0 ? "deposited" : "withdraw"
  } ${Math.abs(mov)}`;

  // if (mov > 0) {
  //   return `Movement ${i + 1}: You deposited ${mov}`;
  // } else {
  //   return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
  // }
});
console.log(movementsDescription);

// ///////////////////////////
// computing username
const user = "Steven Thomas Williams";

// const createUsernames = function (user) {
//   const username = user
//     .toLowerCase()
//     .split(" ")
//     .map((name) => name[0])
//     .join("");
//   // console.log(username);

//   return username;
// };
// console.log(createUsernames("Steven Thomas Williams"));
// const userId = [];
// username.map((name) => {
//   const first = name.slice(0, 1);
//   // console.log(f);
//   userId.push(first);
// });
// console.log(userId.join(""));

// ////////////////////////////////////////

//

// /////////////////////////////
// THE FILTER METHOD
console.log(movements);
const deposits = movements.filter(function (mov, i, arr) {
  return mov > 0;
});
console.log(deposits);

// const depositsFor = [];
// for (const mov of movements) if (mov > 0) depositsFor.push(mov);
// console.log(depositsFor);

const withdrawls = movements.filter((mov) => mov < 0);
console.log(withdrawls);

// const withdrawlsFor = [];
// for (const mov of movements) if (mov < 0) withdrawlFor.push(mov);
// console.log(withdrawlsFor);

// ////////////////////////////////////////
// The REDUCE METHOD
console.log(movements);
// const balance = movements.reduce(function (accumulator, curr, i, arr) {
//   // console.log(accumulator);
//   // console.log(curr, i, arr);
//   console.log(`Iteration ${i}: ${accumulator}`);
//   return accumulator + curr;
// }, 100);
const balance = movements.reduce(
  (accumulator, curr, i, arr) => accumulator + curr,
  100
);
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) {
    return acc;
  } else {
    return mov;
  }
}, movements[0]);
console.log(max);
//

// /////////////                  ( PIPELINE)
// const eurToUsd = 1.1
const totalDepositUSD = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov);
console.log(totalDepositUSD);

// ////////
// the FIND Method
const firstWithdrawl = movements.find((mov) => mov < 0);
console.log(firstWithdrawl);

console.log(accounts);
const account = accounts.find((acc) => acc.owner === "Ajeet Kumar");
// console.log(account);

// for (const account of accounts) {
//   console.log(accounts.find(() => account.owner === "Ajeet Kumar"));
// }

// //////////////////////////////////////////////
// SOME  metods

console.log(movements);
// Equality
console.log(movements.includes(-400));

// Condition
console.log(movements.some((mov) => mov === -400));
const anyDeposits = movements.some((mov) => mov > 0);
console.log(anyDeposits);

//  EVERY methods
console.log(movements.every((mov) => mov > 0));

// seperate callbacks
const deposit = (mov) => mov > 0;
const withdraw = (mov) => mov < 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

// FLAT and FLATMAP
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat());
console.log(arrDeep.flat(1));
console.log(arrDeep.flat(2));

// const accountMovements = accounts.map((acc) => acc.movements);
// const bankMovements = accountMovements.flat();
// console.log(bankMovements);
// const bankBalance = bankMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(bankBalance);

const overallBalance = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

// flatmap
const overallBalance2 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

// SORTING Arrays
// Strings
const owners = ["Jonas", "Adam", "Zach", "Mrtha", "Aj"];
console.log(owners);
console.log(owners.sort());
console.log(owners);

// Numbers
console.log(movements);
// Ascending order
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// });
movements.sort((a, b) => a - b);
console.log(movements);
// return < 0 A comes before B (Keep order)
// return > 0 B comes before A (Switch order)

// Descending order
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (b > a) return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements);

///////////////////////////////////////////////
//
// More Ways of CREATING and FILLING Arrays
console.log(new Array(1, 2, 3, 4, 5));
const numbers = [1, 2, 5, 9, 8, 7, 10];
const x = new Array(7);
console.log(x);
// console.log(x.map(() => 5)); //cannot work
// only one method that we can call on this empty array i.e. fill() method
// x.fill(1);
// x.fill(1, 3);
x.fill(1, 3, 5);

console.log(x);

numbers.fill(23, 2, 4);
console.log(numbers);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

labelBalance.addEventListener("click", function () {
  const movementsUI = Array.from(
    document.querySelectorAll(".movements__value"),
    (el) => Number(el.textContent.replace("€", ""))
    // function (el) {
    //   return Number(el.textContent.replace("€", ""));
    // }
  );
  console.log(movementsUI);
  // console.log(movementsUI.map((el) => Number(el.textContent.replace("€", ""))));
});

// Coding challenge
// Test DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Micheal"] },
];
// 1.
console.log(dogs);
dogs.forEach(function (dog, i, arr) {
  dog.recFood = Math.trunc(dog.weight ** 0.75 * 28);
  if (dog.owners.some((mov) => mov === "Sarah")) {
    console.log(
      `Sarah dog=> current: ${dog.curFood} & Recommed: ${dog.recFood}`
    );
  }
});
// 2.
const dogSarah = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(dogSarah);
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recFood ? "much." : "little."
  }`
);

// 3.
const ownersEatTooMuch = dogs
  .filter((dog, i, arr) => dog.curFood > dog.recFood)
  .map((dog) => dog.owners)
  .flat();
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter((dog, i, arr) => dog.curFood < dog.recFood)
  .map((dog) => dog.owners)
  .flat();
console.log(ownersEatTooLittle);

// 4.
console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little. `);
console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much. `);

// 5.
// const okayFood = dogs.some(
//   forEach(function (dog) {
//     if (dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1) {
//       return true;
//     }
//   })
// );
// console.log(okayFood);
const checkEatingOkay = (dog) =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

console.log(dogs.some(checkEatingOkay));

// 6.
console.log(dogs.filter(checkEatingOkay));

// 7.
const dogsCopy = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsCopy);

// ////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

// MATHS and NUMBERS

console.log(23 === 23.0);
console.log(0.1 + 0.2);
console.log(0.1 + 0.4);
console.log(0.1 + 0.4 === 0.5);
console.log(0.1 + 0.2 === 0.3);

// conversion
console.log(Number("25"));
console.log(+"23");

// Parsing
console.log(Number.parseInt("45rem"));
console.log(Number.parseInt("45rem", 10));
console.log(Number.parseInt("45rem", 2));
console.log(Number.parseInt("2.9px"));

console.log(Number.parseFloat("2.9px"));

// isNaN
console.log(Number.isNaN(20));
console.log(Number.isNaN("20"));
console.log(Number.isNaN(+"20x"));

// isFinite
console.log(Number.isFinite(20));
console.log(Number.isFinite("20"));

// isInteger
console.log(Number.isInteger(12));

// Math & Rounding
console.log(Math.sqrt(64));
console.log(64 ** (1 / 2));
console.log(216 ** (1 / 3));
console.log(64 ** (1 / 3));

// min/max
console.log(Math.max(5, 4, 89, 12, 6, 5, 32));
console.log(Math.min(5, 4, 89, 12, 6, 5, 32));
//  it also type coersion
console.log(Math.max(5, 4, "89", 12, "6", 5, 32));
console.log(Math.min(5, "4", 89, "12", 6, "5", 32));

// Random number
// console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = function (min, max) {
  return Math.trunc(Math.random() * (max - min) + 1) + min;
};
console.log(randomInt(90, 100));
console.log(randomInt(-90, -100));

// rounding
console.log(Math.trunc(23.55956));
console.log(Math.round(23.35956));
console.log(Math.round(23.8));

console.log(Math.ceil(230.8));
console.log(Math.ceil(230.2));

console.log(Math.floor(23.2));
console.log(Math.floor(23.7));

// for negative numbers
console.log(Math.trunc(-23.3));
console.log(Math.trunc(-23.9));

console.log(Math.floor(-23.3));
console.log(Math.floor(-23.9));

// Floating point numbers
console.log((2.8).toFixed(0)); // they are returning strings
console.log((2.2556).toFixed(2));
console.log((2.8).toFixed(2));
console.log((2.8).toFixed(4));
console.log(+(2.2556).toFixed(2)); // returning number

/*
console.log(5 % 2);
console.log(5 / 2); // 5 = 2*2 +1

const isEven = (n) => n / 2 === 0;
console.log(isEven(25));
console.log(isEven(90));
console.log(isEven(32));

const rows = [...document.querySelectorAll(".movements__row")];
console.log(rows);

labelBalance.addEventListener("click", function () {
  [...document.querySelectorAll(".movements__row")].forEach(function (row, i) {
    if (i % 2 === 0) row.style.backgroundColor = "purple";
    if (i % 3 === 0) row.style.backgroundColor = "skyblue";
  });
});
// document.querySelector(".labelBalance").style = "green";

console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 0);

console.log(10000n + 200000n);

const huge = 6565686565678795623215489520205495154548484n;
console.log(typeof huge, huge);

const num = 25;
// console.log(huge + num);
// console.log(huge * num);
console.log(huge * BigInt(num));

// comparison
console.log(20n > 15);
console.log(20n === 20);
console.log(20n == 20);
console.log(huge + " is REALLY BIG.."); //convert into string

// Math Operation
// console.log(Math.sqrt(16n));

// Division
console.log(10n / 5n);
console.log(11n / 5n);
console.log(13n / 5n);
console.log(15n / 5n); // Cut the decimal parts

//  Creating DATES
const now = new Date();
console.log(now);
console.log(new Date("Aug 02 2021"));
console.log(new Date("December 02, 2002"));

console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2037, 10, 19, 15, 23, 5));

// milliseconds
console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

*/
// Working with dates
console.log("-----------------------------------------");
const future = new Date(2039, 10, 19, 15, 23, 56);
// console.log(future);

// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDate());
// console.log(future.getDay());
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());

// console.log(future.toISOString());

// console.log(future.getTime());
// console.log(new Date(2205309236000));

// console.log(Date.now());

// future.setFullYear(2041);

console.log(future);
console.log(Number(future));
console.log(+future);

// const calcDaysPassed = function (date1, date2) {
//   const date = +new Date(date1);
//   const currdate = +new Date(date2);
//   console.log(date, currdate);
//   const timestamps = currdate - date;
//   console.log(new Date(timestamps) / (1000 * 60 * 60 * 24));
// };
// calcDaysPassed("12,10,2020", "3,1,2023");

const calcDaysPassed = (date1, date2) =>
  Math.abs(date1 - date2) / (1000 * 60 * 60 * 24);

const daysPassed = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 15));
console.log(daysPassed);
