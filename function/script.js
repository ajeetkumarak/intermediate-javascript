"use strict";

const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || "$199";

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking("b742");
createBooking("LJ457", 2, 800);
createBooking("LJ457", 8);
createBooking("LJ457", 10);
createBooking("LJ457", 5);
createBooking("LJ313", undefined, 500);

// console.log(bookings);

const flight = "BO737";
const aj = {
  name: "Ajeet Kumar",
  passport: 2458987465,
};

const checkIn = function (flightNum, passenger) {
  (flightNum = "Ls984"), (passenger.name = "Mr. " + passenger.name);

  if (passenger.passport === 2458987465) {
    // alert("check in");
  } else {
    // alert("Wrong passport.");
  }
};

checkIn(flight, aj);
console.log(flight);
console.log(aj);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);

  console.log(person.passport);
};
newPassport(aj);
checkIn(flight, aj);

// javascript has first class functions  which means in technical terms are that functions are so-called first citizens.
//  functions are simply treated as values
//   which enables us to write higher order functions
//  functions are really just another type of objects in javascript,  since object are values so, functions are values too. therefore, we can do lots of interesting things like storing them in variables or object properties

const add = (a, b) => a + b * a - b;
console.log(add(8, 10));

// const getPlace = document.querySelector(".buy-place");
// const greet = () => {
//   console.log("Welcome back sir, hope you enjoy here.");
// };
// getPlace.addEventListener("click", greet);

// Functions Accepting callback functions
const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};
// Higher-order functions
const transformer = function (str, fn) {
  console.log(`Originat string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer("javascript is the best.", upperFirstWord);
transformer("javascript is the best", oneWord);

const high5 = function () {
  console.log("🖐");
};
document.body.addEventListener("click", high5);

const dark = ["Jonas", "Martha", "Adam"];
dark.forEach(high5);

// javascript uses callbacks all the time

// callback functions allow us to create abstraction.
//////////////////////////////////////////////////////////

//****  Functions Returning Functions
// const wish = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// const wish = (greeting) => {
//   return (name) => {
//     console.log(`${greeting} ${name}`);
//   };
// };

const wish = (greeting) => (name) => console.log(`${greeting} ${name}`);

const greetHey = wish("Hey");
greetHey("Jonas");
greetHey("Stevan");

wish("Good Morning,")("Ajeet");

//  The call and apply methods
const arabAirline = {
  airline: "Emirates",
  code: "UAE",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.code}${flightNum}.`
    );
    this.bookings.push({ flight: `${this.code}${flightNum}`, name });
  },
};
arabAirline.book(237, "Aj lenovo");
arabAirline.book(457, "Mj Peter");
console.log(arabAirline);
const saudiwings = {
  airline: "Saudiwings",
  code: "SAE",
  bookings: [],
};

const book = arabAirline.book;
// book(25, "Aj Mj");         does not work

// call metod
book.call(saudiwings, 24, "Sarah Kay");
console.log(saudiwings);

book.call(arabAirline, 21, "Bn lenovo");

const airindia = {
  airline: "Tata Airlines",
  code: "IN-T",
  bookings: [],
};

book.call(airindia, 578, "Narendra modi");
console.log(airindia);

// Apply method
// -does the same thing as of call metod but it does not receive a list of arguments after this keyword but it can take array of arguments
const flightData = [587, "M cooper"];
book.apply(airindia, flightData);
console.log(airindia);
//  this apply metod does not much used in modern javacsript
// so , we do like this using spread operator
book.call(airindia, ...flightData);

// /////////////////////////////////////
// Bind Method

//  bind also allow us to manually set this keywords for any function call.
//  now, difference is that bind does not immediately call the function. instead, it returns a new function where this keyword is bound. so, it set to whatever value we pass into bind

const bookEW = book.bind(saudiwings);
const bookArab = book.bind(arabAirline);
const bookIndia = book.bind(airindia);

bookEW(27, "Virat Kohli");

const bookEW23 = book.bind(saudiwings, 23);
bookEW23("Rohit Sharma");
bookEW23("Smriti mandhana");

// with Event Listeners
arabAirline.planes = 243;
arabAirline.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

const newPlane = document.querySelector(".buy-plane");

newPlane.addEventListener("click", arabAirline.buyPlane.bind(arabAirline));

//
//  Partial applications --- means we can preset parameters
const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 254));

const addVAT = addTax.bind(null, 0.22);
// console.log(addVAT(100));
// console.log(addVAT(200));
// console.log(addVAT(10));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
// console.log(addTaxRate(0.3)(1000));
const addVAT2 = addTaxRate(0.25);
console.log(addVAT2(100));
console.log(addVAT2(1234));

// /////////////////////////////////////////////
// Immediately invoked Functions

// const runOnce = function () {
//   console.log(`This will never run again.`);
// };
// runOnce();

(function () {
  console.log(`This will never run again.`);
})();

(() => console.log("This will Also never run again"))();

// ///////////////////////////////////

//  CLOSURES
let f;

const g = function () {
  const a = 24;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// re-assigning f function
h();
f();
console.dir(f);
//
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

// setTimeout(function () {
//   console.log("TIMER");
// }, 2000);

boardPassengers(180, 3);

// coding challenge
(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue";
  });
})();
