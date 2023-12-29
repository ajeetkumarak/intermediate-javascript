"use strict";

// functions
function logger() {
  console.log("My name is Byte.");
}

// calling / running / invoking function
logger();
logger();
/*
function fruitProcessor(apples, oranges) {
  console.log(`${apples} apples , ${oranges} oranges`);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;

  return juice;
}
fruitProcessor(10, 2);

const appleJuice = fruitProcessor(10, 2);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4)
console.log(appleOrangeJuice);

// Function expression vs Function declaration

// Function declaration  -- you can call a function declaration before you defined it.
function calcAge1(birthYear){
    const age = 2040 - birthYear;
    return age;
}
const age1 = calcAge1(2021)
// console.log(age1)

// Function expression
const calcAge2 = function (birthYear) {
    return 2040 - birthYear;
}
const age2 = calcAge2(2019)

console.log(age1, age2)

// Arrow function
const calcAge3 = birthYear => 2040 - birthYear ;
const age3 = calcAge3(2009)
console.log(age3);

const yearsUntilRetire = (birthYear, firstName) => {
    const age = 2039 - birthYear;
    const retire = 60 - age;
    // return retire;
    return `${firstName} retires in ${retire} years.`
}
console.log(yearsUntilRetire(2020, "Akash"))
console.log(yearsUntilRetire(2009, "Ajeet"))

*/
/*
//  function calling from other functions

const cutFruitPieces = function (fruit) {
    return fruit * 4; 
}

const fruitProcessor = function (apples, oranges) {
    const applePieces = cutFruitPieces(apples)
    const orangePieces = cutFruitPieces(oranges)

    // console.log(`${apples} apples , ${oranges} oranges`);
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
  
    return juice;
  }

  console.log(fruitProcessor(2, 4))

  */ /*
//   
const calcAge = function(birthYear){
   return 2037 - birthYear;
}

function yearsUntilRetire(birthYear, firstName) {
    const age = calcAge(birthYear);
    const retire = 65 - age;

    if(retire > 0) {
        console.log(`${firstName} has ${retire} years to retire. `)
        return retire;
    }else{
        const retired =  -(retire);
        console.log(`${firstName} has been already retired ${retired} years ago. `)
        return -1;
    }

    // return retire;
    // return `${firstName} has ${retire} years to retire. `

}
console.log(yearsUntilRetire(2010, "Ajeet"));
console.log(yearsUntilRetire(1960, "Mike hus"))


// ARRAYS..
const friends = ["Mike","Steve","peter","parker","tony"]
console.log(friends)

const years = new Array(1991, 1987, 2022, 2001, 1999)
console.log(years[4])
console.log(friends.length)
console.log(friends[friends.length - 1])

friends[2] = "Ajeet"
console.log(friends)

const firstName = "Ajeet";
const me = [firstName, "kumar", 2022-1999, "programmers", friends]
console.log(me.length, me)

                  */
// exercise . . . .
// function calculateAge(birthYear){
//     return 2023 - birthYear;

// }
// const year = [2002, 2005, 1998, 1987, 2009]

// const age1 = calculateAge(year[0])
// const age2 = calculateAge(year[1])
// const age3 = calculateAge(year[year.length - 1])
// console.log(age1, age2, age3)

// const ages = [calculateAge(year[0]), calculateAge(year[1]),calculateAge(year[year.length - 1])]
// console.log(ages)

// // Arrays method

// // friends.push("Barbara")
// const newLength = friends.push("Barbara")
// console.log(friends)
// console.log(newLength)

// // add at beginning of array
// friends.unshift("Wednesday")
// // const itLength = friends.unshift("Wednesday")

// console.log(friends)

// // remove element of array
//  friends.pop();     // last element
//  const popped = friends.pop()
//  console.log(friends)
//  console.log(popped)

//  friends.shift()    // first element
//  console.log(friends)

//  console.log(friends.indexOf('Ajeet'))
//  console.log(friends.indexOf('Wednesday'))

//  console.log(friends.includes("parker"))
//  console.log(friends.includes("peter"))
// // this "includes" method check elements through strict equality

// if(!friends.includes("Ajeet")){
//     console.log("it's actually me as friend.")
// }else{
//     console.log("yes. YAMAHA")
// }

/*

//  objects     (datatype)
const myArray = [
    'jonas',
    "kumara",
    2022 - 2001,
    'teacher',
    ['Michael', 'Peter', 'Steve','Aj']
]

const myObj = {
    firstName: "Wednesday",
    lastName: "Thing",
    age: 2022 - 2001,
    job: "Teacher",
    friends: ['Micheal','Peter','Steve','Ajeet']
}
console.log(myObj)

console.log(myObj.firstName, myObj.lastName)
console.log(myObj['firstName'], myObj['lastName'])

const nameKey = "Name";
console.log(myObj['first' + nameKey])
console.log(myObj['last' + nameKey])

 const interestedIn = prompt("What do you want to know about myObj ? Choose between firstName, lastName, age, job, and friends.")

if(myObj[interestedIn]){
console.log(myObj[interestedIn]);
    
}else{
    console.log("Bad Request/..? Choose between firstName, lastName, age, job, and friends.")
}

myObj.location = "Bihar, IN"
myObj['twitter'] = "Aj9162.."

console.log(myObj)

// challenge
const meAj = `${myObj.firstName} has ${myObj.friends.length} friends, and his best friend is ${myObj.friends[0]}.`
console.log(meAj)
                            */
const ajeet = {
  firstName: "Ajeet",
  lastName: "Kumar",
  birthYear: 2001,
  job: "Student",
  friends: ["Anshu", "Ujjawal", "Aman", "Ankit"],
  hasDriverLicense: true,

  // calcAge: function(birthYear){
  //     return 2023 - birthYear;
  // }

  // calcAge: function(){
  //     console.log(this)
  //     return 2023 - this.birthYear;
  // }
  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-years old ${
      this.job
    }, and he has ${
      this.hasDriverLicense && this.calcAge() >= 18 ? "yes" : "no"
    } Driving License.`;
  },
};
// console.log(ajeet.calcAge(2007))
// console.log(ajeet['calcAge'](1999))
console.log(ajeet.calcAge());
console.log(ajeet.age);

// challenge
// if(ajeet.hasDriverLicense){
//     console.log(`${ajeet.firstName} is a ${ajeet.age}-years old student, and he has Driving License.`)

// }else{
//     console.log(`${ajeet.firstName} is a ${ajeet.age}-years old student, and he can't drive .No license`)

// }
console.log(ajeet.getSummary());

const mark = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};
const john = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};
console.log(mark.calcBMI(), john.calcBMI());
console.log(mark.BMI, john.BMI);
if (mark.BMI > john.BMI) {
  console.log(
    `${mark.firstName} ${
      mark.lastName
    }'s BMI (${mark.calcBMI()}) is higher than ${john.firstName} ${
      john.lastName
    }'s BMI (${john.calcBMI()}).`
  );
} else if (john.BMI > mark.BMI) {
  console.log(
    `${john.firstName} ${
      john.lastName
    }'s BMI (${john.calcBMI()}) is higher than ${mark.firstName} ${
      mark.lastName
    }'s BMI (${mark.calcBMI()}).`
  );
} else {
  console.log("Both have same bmi.");
}
//
//    loops ......................................
for (let rep = 1; rep <= 10; rep++) {
  console.log(`lifting weight ${rep}`);
}

const array = [
  "Jonas",
  "Kumar",
  2037 - 2012,
  "Student",
  ["Ajeet", "Amit", "Wednesday"],
  true,
];
const typesOfArray = [];

for (let i = 0; i < array.length; i++) {
  console.log(array[i], typeof array[i]);

  typesOfArray[i] = typeof array[i];
  // types.push(typeof array[i]);
}
console.log(typesOfArray);

const years = [2002, 2005, 1992, 2010, 2015];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// continue & break
// CONTINUE
console.log("--- only STRINGS(continue) ---");
for (let i = 0; i < array.length; i++) {
  if (typeof array[i] !== "string") continue;

  console.log(array[i], typeof array[i]);
}
// BREAK
console.log("--- BREAK ----");
for (let i = 0; i < array.length; i++) {
  if (typeof array[i] === "number") break;

  console.log(array[i], typeof array[i]);
}

console.log("---looping backwards---");
for (let i = array.length - 1; i >= 0; i--) {
  console.log(i, array[i]);
}

// loops in loop
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`----starting exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight ${rep}`);
  }
}

// while loop
let count = 1;
while (count <= 10) {
  console.log(`WHILE: lifting repeat ${count}`);
  count++;
}
let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);
while (dice !== 6) {
  console.log(`you rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;

  if (dice === 6) console.log(`loop is about to end...`);
}
/*
//   CHALLENGE : tip calculator    125, 555, 44
let bill = 440;
let tip;
let billTotal;
// if(bill <= 300 && bill >= 50){
//     tip = bill * (15 / 100);
//     billTotal = bill + tip;
//     console.log(`Total bill = ${billTotal}`)
//     console.log(`The bill was ${bill} ,the tip was ${tip}, the total value is ${billTotal}`)
//     }else{
//     tip = bill * (20 / 100);
//     billTotal = bill + tip;
//     console.log(`Total bill = ${billTotal}`)
//     console.log(`The bill was ${bill}, the tip was ${tip}, the total value is ${billTotal}`)

// }
const bills = [125, 555, 44];
function calcTip(bill) {
  if (bill <= 300 && bill >= 50) {
    tip = bill * (15 / 100);

    return tip;
  } else {
    tip = bill * (20 / 100);

    return tip;
  }
}

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(tips, totals);
 */

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// function calcTip(){
//     if (bill <= 300 && bill >= 50) {
//         tip = bill * (15 / 100);
//         tips.push(tip)

//       } else {
//         tip = bill * (20 / 100);
//         tips.push(tip)

//       }
// }
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
function calcAverage(arr) {
  let sum = 0;
  for (let a = 0; a < arr.length; a++) {
    sum += arr[a];
  }
  // console.log(sum)

  // let average = sum / arr.length;
  // console.log("Average:" ,average)

  return sum / arr.length;
}
calcAverage(arr);
calcAverage(totals);
console.log(calcAverage(totals));
console.log(calcAverage(tips));
const z = 23;
if (z === 25) console.log(23);

//
// temperature
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    // value: Number(prompt("Degree celsius: ")),
    value: 27,
  };
  console.table(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());

// using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  // console.log(max, min);

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    // console.log(curTemp, typeof curTemp);

    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;

    console.log(max, min);
  }

  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeBug);

// coding challenge
const data1 = [17, 21, 23];
const data2 = [15, 5, -5, 0, 4];

function printForecast(arr) {
  let str = `[${arr}] will print ... `;

  for (let i = 0; i < arr.length; i++) {
    // str = str + `${arr[i]}°C in ${i + 1} days... `;
    str += `${arr[i]}°C in ${i + 1} days... `;

    // console.log(`[${arr}] will print
    //     ...${arr[i]}°C in ${i + 1} days...
    //      `);
  }
  console.log(str);
}
printForecast(data1);
printForecast(data2);





let testArray = Array.from({length: 10000}, () => Math.floor(Math.random() * 2000000));
for (i = 10000; i < 1000000; ++i) {
  testArray.push(Math.floor(Math.random() * 2000000));
  try {
    Math.max.apply(null, testArray);
  } catch (e) {
    console.log(i);
    break;
  }
}