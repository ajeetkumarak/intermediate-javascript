console.log(" Generators in javascript");

//  *    Genetators in Javascript

function* numberGen() {
  let i = 0;

  // yield 1;
  // yield 2;
  // yield 3;
  // yield 4;
  // yield 5;

  while (true) {
      yield i;                     // Blue colour  --  Number
      i++;
  }

//   while (true) {
//     yield (i++).toString();       // converted into string (Black Colour)
//   }
}

const gen = numberGen();
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
