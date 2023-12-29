console.log("Hello World . .");
/*

// Body mass index
const weightOfMark = 98;
const heightOfMark = 1.69;

const weightOfJohn = 92;
const heightOfJohn = 1.95;

// BMI = weight / height  ** 2  or  BMI = weight / (height * height)
const BmiOfMark = Math.floor(weightOfMark / (heightOfMark ** 2));
console.log(`Mark's BMI is ${BmiOfMark} kg/m2. `)

const BmiOfJohn = Math.floor(weightOfJohn / (heightOfJohn ** 2));
console.log(`John's BMI is ${BmiOfJohn} kg/m2.`)

const markHigherBMI = BmiOfJohn < BmiOfMark;
if(markHigherBMI) {
    console.log(`Mark's BMI (${BmiOfMark}) is higher than John's BMI (${BmiOfJohn}).`)
}else{
    console.log(`John's BMI (${BmiOfJohn}) is higher than Mark's BMI (${BmiOfMark}).`)

}
// ......
const inputYear = '2002';
const updateInputYear = Number(inputYear)
console.log(inputYear, updateInputYear)
console.log(inputYear + 102)   // basically, it concatenate 
console.log(updateInputYear + 102)

let n = '1' + 1;
n = n-1;
console.log(n)

//  Boolean    (truthy & falsy values)
//  05 flasy values are  0, '', undefined, null, NaN
console.log(Boolean(0))
console.log(Boolean(""))
console.log(Boolean(undefined))
console.log(Boolean('jonas'))
console.log(Boolean({}))
console.log(Boolean(' '))

const money = 0;
if(money) {
    console.log("Don't spend it all.")
}else{
    console.log('you should get a job.')
}

//   ==  vs  ===  vs  !=  vs  !==

let number = prompt("What's your favorite number?");
console.log(number)
console.log(typeof number)

number = Number(number)
console.log(typeof number)

if(number === 10) console.log("cool.. your favorite is 10.")
else if(number === 20) console.log("cool . your favorite is 20.")
else if(number === 30) console.log("cool . your favorite is 30.")
else if(number === 40) console.log("cool . your favorite is 40.")
else console.log(`Your favorite number is diffrent.`)

if(number !== 20) console.log(`why not 20.`)

*/
                           /*
// logical operators
const hasDriversLicence = true;
const hasGoodVision = false;

console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(!hasDriversLicence);
console.log(!hasGoodVision);

// let shouldDrive = hasDriversLicence && hasGoodVision;
//     shouldDrive = hasDriversLicence || hasGoodVision;

const isTired = false;
    console.log(hasDriversLicence && hasGoodVision || isTired)

  if (hasDriversLicence && hasGoodVision && !isTired) {
  console.log("Able to drive.");
 } else {
  console.log("you can't drive...");
 }
                    */    
                   
                                /*
//  challenge. . .

// dolphins score are 96, 108, 89
// Kolas score are 88, 91, 110
let avgDolphineScore = (96 + 108 + 89) / 3
let avgKolasScore = (88 + 91 + 110) / 3

if(avgDolphineScore > avgKolasScore) console.log(`Team Dolphine Winners🏆.`)
else if(avgDolphineScore < avgKolasScore) console.log(`Team Kolas Winners🏆.`)
else if(avgDolphineScore === avgKolasScore) console.log("it's Draw. Both winners Shared Trophy.")
else console.log("Match not played.")

// bonus :     Dolphine score: 97, 112, 101   &  Kolas score: 109, 95, 123
 avgDolphineScore = (97 + 112 + 101) / 3;
 avgKolasScore = (109 + 95 + 123) / 3;
 let minScore = 100;

console.log(avgDolphineScore >= 100, avgKolasScore >= 100) 

if(avgDolphineScore > avgKolasScore && avgDolphineScore >= 100 && avgKolasScore >= 100){
    console.log(`Team Dolphine Winners.`)
} 
else if(avgDolphineScore < avgKolasScore && avgDolphineScore >= 100 && avgKolasScore >= 100) {
    console.log(`Team Kolas Winners.`)
}
else if (avgDolphineScore === avgKolasScore && avgDolphineScore >= 100 && avgKolasScore >= 100){
    console.log("it's Draw.")
}
else {
    console.log("No team win (both team score less than 100. )")
}

// bonus :  Dolphine Score: 97, 112, 101  &  Kolas Score: 109, 95, 106
avgDolphineScore = (97 + 112 + 101) / 3;
avgKolasScore = (109 + 95 + 106) / 3;

console.log(avgDolphineScore, avgKolasScore) 

if(avgDolphineScore > avgKolasScore && avgDolphineScore >= 100 && avgKolasScore >= 100){
    console.log(`Team Dolphine Winners.`)
} 
else if(avgDolphineScore < avgKolasScore && avgDolphineScore >= 100 && avgKolasScore >= 100) {
    console.log(`Team Kolas Winners.`)
}
else if (avgDolphineScore === avgKolasScore && avgDolphineScore >= 100 && avgKolasScore >= 100){
    console.log("it's Draw (Score level).")
}
else {
    console.log("No team win the trophy. (both team score less than 100. )")
}

// switch statement

const day = 'sunday';
// console.log(day === 'friday')

switch(day) {
    case 'monday':
        console.log("Plan course structure on monday");
        break;
    case 'tuesday':
        console.log("Prepare theory videos & tutorials")
        break;
    case 'wednesday':
        console.log("it's wednesday")
        break;
    case 'thrusday':
        console.log("it's what day it's thrusday")
        break;
    case 'saturday':
        console.log("it's not friday")
        break;
    case 'sunday':
        console.log("it's holyday.")
        break;
    default:
        console.log("not a valid day.")
}


// The conditional (Ternary) operator...
// remember : an operator always produces a value, thus an operator is an expression

const age = 14;

age >= 18 ? console.log('I like to drink wine 🎎.') : console.log('I like to drink juice 💧.')

const drink = age>= 18 ? 'wine 🎎' : 'Juice 💧';
console.log(drink);

let drink2;
if(age >= 18){
    drink2 = 'wine 🎎';
}else{
    drink2 = 'juice 💧'
}
console.log(drink2)


console.log(`I like to drink ${age>= 18 ? 'wine 🎎' : 'Juice 💧'}`)




*/
    /*
const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(10,20,30))

// test 1
let dolphinScore = calcAverage(44, 23, 71);
let kolasScore = calcAverage(65, 54, 49);
 
console.log(dolphinScore, kolasScore)

function checkWinner(avgDolphins, avgKolas) {

    if(avgDolphins >= 2 * avgKolas){
        console.log(`Dolphins Winner.(${avgDolphins} vs. ${avgKolas})`)
    }else if(avgKolas >= 2 * avgDolphins){
        console.log(`Kolas Winner.(${avgKolas} vs. ${avgDolphins})`)
    }
    else{
        console.log("NO team wins..")
    }
}
checkWinner(dolphinScore, kolasScore)
checkWinner(321, 105)

// test 2
 dolphinScore = calcAverage(85, 54, 41);
 kolasScore = calcAverage(23, 34, 27);
 
console.log(dolphinScore, kolasScore)
checkWinner(dolphinScore,kolasScore)

*/

// PROBLEM:
const temps = [3, -2, -6, 'error', 9, 13, 17, 15, 14, 9, 5]

//  1. lets understand the problem
     // what is temp amplitude ?   ans-   diffrence between highest and lowest temp
     // how to calculate max and min temp
     // what's a sensor error ?



// 2. Breaking up into sub-problems
    // how to ignore errors
    // find max and min temp value
    // subtract min from max (temp)  and return it.

const calcTempAmplitude = function(temps){
    let max = temps[0] ; 
    let min = temps[0];

    for(let i =1; i < temps.length; i++){
        const currTemp = temps[i];
      if(typeof currTemp !== 'number') continue;
        if(currTemp > max){
            max = currTemp;
        }
        if(currTemp < min){
            min = currTemp;
        }
    }
    // console.log(`max:` + max, `min:` + min)

    return max - min;
}
// console.log( calcTempAmplitude([12,15,78,92]))
const amplitude = calcTempAmplitude(temps)
console.log(amplitude)

// PROBLEM 2: function should now receive 2 arrays of temps
// const temps1 = [15,28,29,100,199,3,20,88]
// const temps2 = [14, 20, 120, 88,7]
 const calculateAmplitude = function(t1, t2) {
      const temps = t1.concat(t2)
      console.log(temps);

      let max = temps[0];
      let min = temps[0];
      for(let i = 1; i < temps.length; i++){

        const currTemp = temps[i]
        if(typeof currTemp !== 'number') continue;
        if(currTemp < min) min = currTemp;
        if(currTemp > max) max = currTemp;

      }

      console.log(max, min)
      return max - min;

 }
//  console.log(calculateAmplitude(temps1, temps2))
 console.log(calculateAmplitude([10,1,5,7], [1,3,9,5]))
 console.log(calculateAmplitude([19,5,17,2], [31,21,9,4]))


// CODING CHALLENGE
const data1 = [17, 21, 27]
const data2 = [12, 5, -5, 4, 0]

//   1. understanding the given problem
    // -  Array transform to string , separated by ...
    // -  What is x days ?   ans- index + 1

//   2 .Breaking up into sub-problems
    // - transform array into string
    // - transform each element to string with °c
    //  - string need to contain day (index + 1)
    //  - Add ... betweens element and end of string
const printForecast = function(arr){
  let str = '... ';
    for(let i = 0; i < arr.length; i++){
        str += `${arr[i]}°C in ${i + 1} days ...`;

    }
        console.log(str)
    
}

printForecast(data1)