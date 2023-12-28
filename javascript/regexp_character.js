console.log("Regular Expressions - Character sets");

// Regular Expressions
// Basic Functions
// Metacharacter Symbols
//*        Character Sets
//we use square bracket [..] for character sets as follows..-]

// let regex = /^h/i;

let regex = /h[a-z]rry/; // can be any character from a to z
regex = /h[abcd]rry/; //can be an a, b ,c or d
regex = /b[gh]ai/;
regex = /h[^aty]rry/; // ^ means does not match with given character in [..]
regex = /b[^xcv]a[kdi]/; //cannot be any of x, c, or v +can be any k, d, or i
regex = /[Bb][^ng]o[a-zA-z]he[qr]/;
regex = /ha[rs]r[yu0-9][0-9]/;

// *         .. .  .  Quantifiers
// we use curly braces {....} as follows for grouping
regex = /har{3}y/; // r can occur exactly 2 times
regex = /har{0,3}y/;

// *       .. .. . .  Groupings
// we use parenthese() for groupings.
regex = /(har){2}/;
regex = /(har){2}([0-9]r)3/;
regex = /(ha){2}([0-9]r){2}y/;

let str = "harry brother and bhai";
str = "harry6 broTher and bhai";
str = "harry aiya";
str = "harhar5r3 brother";
str = "haha1r1ry bhai";

let result = regex.exec(str);

console.log(`The Result of Exec() is`, result);

if (regex.test(str)) {
  console.log(`The String "${str}" matches the Expression '${regex.source}'`);
} else {
  console.log(
    `The String "${str}" does not match the Expression '${regex.source}'`
  );
}
