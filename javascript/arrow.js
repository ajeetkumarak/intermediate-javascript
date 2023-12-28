console.log("Here we learn ............ Arrow Functions");

function ajeet() {
  console.log("This is nice computer ever.");
}
ajeet();

// it can also be written as follows:_________     _____ ____

const harry = () => {
  console.log("This is the nice computer we get ever. . . . ");
};
harry();

// * Also __ ___ ___ ___ ___ ___ ___
const greet = function () {
  return "Good The Boys... ...";
};
console.log(greet());

const againgreet = () => {
  return "Good The Man .. .. ..";
};
console.log(againgreet());

//* Also  ____ _ _ _ _ _ __ _ _ _
//   one liners do not required braces{} or return
//  one  line  will automatically return

const wish = () => "good Morning";
console.log(wish());

// to return object in one line then, add inside  parentheses as follows,..
const person = () => ({ name: "Ajeet" });

console.log(person());

// **********************************************************************

// * For String in input
const men = (name)=> "Good Morning "+ name;

console.log(men("harry"))

// Also  ..  ..  , 
// for one argument, we can even not use parentheses for e.g.(name) remove name
const women = name => "Good Morning "+ name;

console.log(women("ankit"))

// ************************************
// for more than one arguments we have to use parentheses ()
const student = (name, surname) => "Good Morning "+ name + surname;

console.log(student("Aadipurush ","Goodbye"))



// *   Single parameters do not need parentheses ,but
// *   you will have to put parentheses if there are multiple parameters.