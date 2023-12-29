"use strict";

// ENHANCED Object Literals
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const rushingHours = {
  [days[0]]: {
    open: 6,
    close: 10,
  },
  [days[1]]: {
    open: 7,
    close: 9,
  },
  [days[2]]: {
    open: 5,
    close: 11,
  },
  [`day-${2 + 4}`]: {
    open: 5,
    close: 12,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Sandwich", "Garlic Bread", "Salad", "vadapaw"],
  mainMenu: ["Pizza", "Pasta", "Risotto", "Burger", "Coffee"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    sat: {
      open: 4,
      close: 24,
    },
    fri: {
      open: 11,
      close: 23,
    },
  },

  // ES6 enhanced object literals
  rushingHours,

  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:01",
    address,
  }) {
    console.log(starterIndex);
    console.log(
      `order received. ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious Pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

restaurant.orderDelivery({
  time: "22:31",
  address: "sunset drive london",
  mainIndex: 2,
  starterIndex: 2,
});
restaurant.orderDelivery({ address: "railway station ssm", starterIndex: 2 });

const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// destructuring array
const [x, y, z] = arr;
// console.log(x, y, z)
// console.log(arr)

const [first, , second] = restaurant.categories;
// console.log(first, second)

let [main, secondary] = restaurant.categories;
// console.log(main, secondary)

// switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary)

[main, secondary] = [secondary, main];
console.log(main, secondary);

// switch with using destructuring
let [third, , , fifth] = restaurant.mainMenu;
//  console.log(third, fifth)

[third, fifth] = [fifth, third];
console.log(third, fifth);

let array = [5, 6, 8];
let one, three;
[one, three] = array;
// console.log(one, three)

[one, three] = [three, one];
console.log(one, three);

// console.log(restaurant.order(2, 0));
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// nested destructuring
const nested = [2, 4, [5, 8]];
// const [i, , j] = nested;
// console.log(i, j)
const [i, , [j, k]] = nested;
console.log(i, j, k);

// default values
//   const [p, q, r] = [8, 9]
const [p = 1, q = 1, r = 1] = [9];

console.log(p, q, r);

//    ///////////////////////////////////////////
//*    Destructuring Objects

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// //////////////////
//  *  Mutating variables
let f = 111;
let g = 999;
console.log(f, g);

const obj = { f: 23, g: 7, h: 19 };

({ f, g } = obj);
console.log(f, g);

// nested objects
const { fri } = openingHours;
console.log(fri);

const {
  sat: { open: o, close: c },
} = openingHours;
console.log(o, c);

// //////////////////////////////////////////////////
//   *   Spread operator
//    used to basically expand an array into all it's element
//   i.e. basically unpacking all array elements at one

const counts = [7, 8, 9];
const badCounts = [1, 2, counts[0], counts[1], counts[2]];
console.log(badCounts);

const goodCounts = [100, 99, 98, ...counts];
console.log(goodCounts);

console.log(...goodCounts);

console.log(restaurant.mainMenu);
const newMenu = [...restaurant.mainMenu, "Samosa", "Kachori"];
console.log(newMenu);

// copy arrays
const mainMenuCopy = [...restaurant.mainMenu];

// join 2 or more arrays
const allMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(allMenu);

// spread operators work on the iterables
// iterables are things like all strings, maps,or  sets but NOT objects.
// most of built-in data structuresin javascript are now iterables, but except objects.

const str = "Jonas";
const letters = [...str, " ", "s."];
console.log(letters);
console.log(...str);

// example:
const ingredients = [
  //   prompt("Let's make pasta. Ingredient 1?"),
  //   prompt("Let's make pasta. Ingredient 2?"),
  //   prompt("Let's make pasta. Ingredient 3?"),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = {
  ...restaurant,
  foundedIn: 2019,
  founder: "Ajeet Kumar",
};
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Indiana Corner";
console.log(restaurantCopy);
console.log(restaurantCopy.name);
console.log(restaurant.name);
///////////////////////////////////////////////////
// *    Rest Pattern  -- it works to collect elements in a destructuring assingment

//  SPREAD, because on the RIGHT side of =
const scores = [1, 2, ...[3, 4]];
console.log(scores);

// REST , because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// in objects;
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// functions
const add = function (...numbers) {
  //   console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  console.log(sum);
};
add(2, 3);
add(5, 6, 8, 9, 4);
add(8, 8, 2, 77, 8, 7, 5, 8, 87, 7, 5, 8, 8, 5, 5, 5, 5);
const d = [23, 5, 7];
add(...d);

restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");
restaurant.orderPizza("lot of cheese");

/////////////////////////////////////////////////

// short Circuitng ( && and ||)
// use any data type, return any data type,
console.log("----- OR -----");
console.log(3 || "jonas");
console.log("" || "jonas");
console.log(0 || true);
console.log(undefined || null);

console.log(undefined || 0 || "" || "Hello" || 23 || null);

// AND operator
console.log("----- AND -----");
console.log(0 && "jonas");
console.log(7 && "jonas");
console.log("Hello" && 23 && null && "jonas");

if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "Cheese");
}

restaurant.orderPizza && restaurant.orderPizza("mushroom", "sauces");

// ******************
// The Nullish Coalescing Operators (??)
restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

// //////////////////////////////////

//NEW Way of Looping over Arrays ---- introduced in ES6
//   for-of loop

const hotelMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(hotelMenu);
for (const item of hotelMenu) console.log(item);

// for (const item of hotelMenu.entries()) {
//   // console.log(item);
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }

for (const [i, element] of hotelMenu.entries()) {
  // console.log(item);
  console.log(`${i + 1}: ${element}`);
}

// console.log(hotelMenu.entries());
// console.log([...hotelMenu.entries()]);

/////////////////////////////////////////////////
//  Optional Chaining
console.log(restaurant.openingHours.sat);
console.log(restaurant.openingHours.mon);
console.log(restaurant.openingHours.sat.close);

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// with optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.fri?.close);

// example:
const week = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of week) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? "Closed";
  const close = restaurant.openingHours[day]?.close;

  console.log(`On ${day}, we open at ${open}`);
}

// optional chaining on methods
console.log(restaurant.order?.(0, 3) ?? "Method does not exist");
console.log(restaurant.orderRisotto?.(0, 3) ?? "Method does not exist");

// optional chaining even work on Arrays
const users = [{ name: "Jonas", email: "hello.com", add: "your PC" }];

if (users.length > 0) console.log(users[0]?.email);
else console.log("User array empty");

console.log(users[0]?.email ?? "User array empty");
console.log(users[1]?.email ?? "User array empty");

// ///////////////////////////////////////////////////
//  Looping objects

// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days i.e. `;

// for (const day of Object.keys(openingHours)) {
//   console.log(day);
// }
for (const day of properties) {
  console.log(day);
  openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  // console.log(x);
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

// Two more data structures are introduced in ES6 are "sets" and "map"

// sets
// sets are collection of unique values
//  means  that a set can never have any duplicates
const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Rissoto",
  "Pizza",
  "Pasta",
]);
console.log(ordersSet);
console.log(new Set("Jonas"));
console.log(ordersSet.size);
console.log(ordersSet.has("Pizza"));
console.log(ordersSet.has("Bread"));

ordersSet.add("Garlic Bread");
ordersSet.add("Garlic Bread");

ordersSet.delete("Rissoto");
// ordersSet.clear();
console.log(ordersSet);

// sets are also iterables so we can loop over them
for (const order of ordersSet) console.log(order);

// Examples:
const staff = [
  "Waiter",
  "Chef",
  "Waiter",
  "Manager",
  "Chef",
  "Waiter",
  "Receptionist",
];
const staffUnique = [...new Set(staff)];
// spread opreator works on all iterables
console.log(staffUnique);

console.log(
  new Set([
    "Waiter",
    "Chef",
    "Waiter",
    "Manager",
    "Chef",
    "Waiter",
    "Receptionist",
  ]).size
);
console.log(new Set("AjeetKumar").size);

// maps
// a map is a data structure that we can use to map values to key
//  just like object , data is stored in key value pair in maps
//  big difference :in map, keys can have any type and this can be huge but in objects , keys are basically always strings
//  im map, it can be of any type ,, it could be objects or arrays or ther maps
const rest = new Map();
rest.set("name", "Classico Briana");
rest.set(1, "Mumbai, MH");
console.log(rest.set(2, "SSM, BR"));

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 9)
  .set("close", 16)
  .set(true, "We are open :)")
  .set(false, "We are closed :(");

console.log(rest.get("categories"));
console.log(rest.get(2));
console.log(rest.get(true));

const time = 12;
console.log(rest.get(time >= rest.get("open") && time <= rest.get("close")));

console.log(rest.has("categories"));
rest.delete(2);
console.log(rest);
console.log(rest.size);
// rest.clear();
console.log(rest);

// we can use arrays or objects as map keys
rest.set([1, 2, 3], "Test");
console.log(rest);
console.log(rest.size);

// console.log(rest.get([1, 2, 3])); // it dsoes not work
// hence, it work as follow
const nums = [10, 20, 30];
rest.set(nums, "Tens");
console.log(rest);
console.log(rest.get(nums));

// objects in map
rest.set(document.querySelector("h1"), "Heading");
console.log(rest);

// Map Iteration
const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "Javascript"],
  ["correct", 3],
  [true, "Correct🎉"],
  [false, "Try again😫"],
]);
console.log(question);

console.log(Object.entries(openingHours));

const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// quiz app
console.log(question.get("question"));
// maps are also iterables
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}
const answer = 3;
// const answer = Number(prompt("Your answer"));
console.log(answer);
console.log(question.get(answer === question.get("correct")));

// convert map to array
console.log([...question]);
// console.log(...question.entries());
console.log(...question.keys());
console.log(...question.values());

//    //////////////////////////////////////////////////////

//   Working with strings

const airline = "Air Tata India";
const plane = "B717";
// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log(plane[3]);
// console.log("B737"[2]);

// console.log(airline.length);
// console.log("B737".length);

// console.log(airline.indexOf("I"));
// console.log(airline.lastIndexOf("i"));
// console.log(airline.indexOf("Tata"));

// console.log(airline.slice(9));
// console.log(airline.slice(4, 9));

// console.log(airline.slice(0, airline.indexOf(" ")));
// console.log(airline.slice(airline.lastIndexOf(" ") + 1));

// console.log(airline.slice(-4));
// console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  //  B and E are middle seats
  const s = seat.slice(-1);
  console.log(s);
  if (s === "B" || s === "E") {
    console.log("You got the middle seat");
  } else {
    console.log("You got lucky..");
  }
};

// checkMiddleSeat("11B");
// checkMiddleSeat("23C");
// checkMiddleSeat("11B");
checkMiddleSeat("5E");

// How these work with string as string are primitive data types
console.log(new String("Jonas"));
console.log(typeof new String("Lonasj"));
console.log(typeof new String("Lucas").slice(1));
// javascript behind the scene convert the string primitive to a string object with the same content
// And  then it's on the object where the methods are called
// this process is called boxing because it basically takes our string and put it into a box which is the object

// working with strings part-2

const passenger = "jonAS";
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);

// console.log(passengerCorrect);

function CorrectName(passenger) {
  let name = passenger;
  name = name.toLowerCase();
  name = name[0].toUpperCase() + name.slice(1);

  console.log(name);
}
CorrectName("mArIya PiE");

// comparing email
const email = "hello@aj.com";
const loginEmail = "  Hell000O@Jonas.Io \n";

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

// replacing in string
const priceBG = "288,97£";
const priceUS = priceBG.replace("£", "$").replace(",", ".");
console.log(priceUS);
const announcement = `All passengers come to boarding door 23. Boarding door 23.`;

console.log(announcement.replace("door", "gate"));
// console.log(announcement.replaceAll("door", "gate"));

console.log(announcement.replace(/door/g, "gate"));

// Booleans
const jet = "Airbus A320neo";
console.log(jet.includes("A320"));
console.log(jet.includes("B716"));

console.log(jet.startsWith("Air"));
if (jet.startsWith("Airbus") && jet.endsWith("neo")) {
  console.log("Part of the NEW Airbus family");
}

// practice
const checkLuggage = function (items) {
  const luggage = items.toLowerCase();
  if (luggage.includes("knife") || luggage.includes("gun")) {
    console.log("You are not allowed on board");
  } else {
    console.log("Welcome aboard.");
  }
};
checkLuggage("I have a laptop, some food and a pocket Knife");
checkLuggage("Socks and camera");
checkLuggage("some snacks and a gun for protection");

// ////
console.log("a+very+nice+string".split("+"));
// console.log("Ajeet kumar".split(" "));

const [firstName, lastName] = "Ajeet Kumar".split(" ");

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper);

  console.log(namesUpper.join(" "));
};

capitalizeName("jessics ann smith davis");

//  Padding a string
const message = "GO to date 23.";
console.log(message.padStart(25, "+"));
console.log("jonas".padStart(25, ":)"));

console.log(message.padEnd(20, "+").padStart(30, ":"));

const maskCreditCard = function (number) {
  // const str = String(number);
  const str = number + "";
  const last = str.slice(-4);
  // console.log(str, last);

  console.log(last.padStart(str.length, "*"));
};
maskCreditCard(1235412369842368);
maskCreditCard("987856987456654889978956258956");

// Repeat method in string
const flyMessage = "Bad weather... All Departures Delayed...";
console.log(flyMessage.repeat(6));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"🛫".repeat(n)}`);
};
planesInLine(5);
planesInLine(10);
planesInLine(12);
planesInLine(7);
