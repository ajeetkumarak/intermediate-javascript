console.log(". . . Javascript Regular Expressions & related functions");
// anything written between /...../ in js  are called Regular Expression Literals

let reg = /Ajeet/;
console.log(reg);
// Two flags are there used   1."g"  g means global  &    2. "i"  i means case-insensitive
reg = /Ajeet/g
// reg = /Ajeet/i

console.log(reg.source);

let str = "This is great code challenge with AjEEt. Thanks Ajeet..    good bye Ajeet";
// Functions to match expressions
//* 1. exec() -- This function will return an array for match or null for no match
let result = reg.exec(str);
console.log(result);
console.log(result.input);
console.log(result.index);


// result = reg.exec(str);
// console.log(result);

// result = reg.exec(str)        We can use multiple exec with global flag..
// console.log(result)

// result = reg.exec(str)
// console.log(result)


//* 2. test()  -- returns true   or  false
let reg2 = /more/;
// str2 = "learn more learn Earn more Never give Up"
let str2 = "learn oreh learn Earn MOREore Never give Up"
let result0 = reg2.exec(str2);
if (result0){
    console.log(result0)
    console.log(result0.index)
    console.log(result0.input)
}


let result2 = reg2.test(str2)
console.log(result2)
// this will only print true if the "reg2" is there in the string "str2".




// * 3. match() -- it will return an array of results or null

let regular = /javascript/
// regular = /javascript/g
// regular = /javascript/i
let str3 = "we study about javascript regular expression in javascript"
// let result3 = reular.match()   ----     this is wrong way we have to write...
let result3 = str3.match(regular)

console.log(result3)



// * 4. search()  -- return index of first match, else -1
let regular1 = /paper/
// regular1 = /papaya/
let str4 = "we study about javascript paper regular expression in paper javascript"
console.log(regular1.exec(str4))
// let result3 = reular1.search()   ----     this is wrong way we have to write...
let result4 = str4.search(regular1)

console.log(result4)




// * replace()  -- Returns new replaced new strings with all the replacements
     regular1 = /paper/g
 let result5 = str4.replace(regular1,'CODER')

 console.log(result5)   // it will replace first match( paper) only
//  to replace all we have to give global flag

console.log(result5)