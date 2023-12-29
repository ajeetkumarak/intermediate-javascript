"use strict";
document.body.style.backgroundColor = "purple";

// Coding challenge
const game = {
  team1: "Mandrid",
  team2: "Manchester",
  players: [
    [
      "James",
      "Jonas",
      "Kaur",
      "Ellie",
      "Eleven",
      "Dustin",
      "steve",
      "David",
      "Usain",
      "Warner",
      "Pat",
    ],
    [
      "Rohit",
      "Kohli",
      "Rahul",
      "Risabh",
      "Surya",
      "Hardik",
      "Gill",
      "Bumrah",
      "Siraj",
      "Kulcha",
      "Shami",
    ],
  ],
  score: "4.0",
  scored: ["Steve", "Kohli", "Rohit", "Kohli"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
// console.log(players1, player2);

const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// substitute players for team 1
const players1Final = [...players1, "Thiago", "Mabappe", "Nemaar"];
// console.log(players1Final);

// const { team1, x: draw, team2 } = { ...game.odds };
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

const printGoals = function (...players) {
  console.log(`${players.length} goals were scored.`);
  console.log(...players);
};

printGoals("Ajeet", "Amit", "Addil");
printGoals(...game.scored);

team1 < team2 && console.log("Team1 is more likely to WIN.");
team1 > team2 && console.log("Team2 is more likely to WIN.");

//coding challenge 2

const scorers = game.scored;
// console.log(scorers);

for (const [i, scorer] of scorers.entries()) {
  console.log(`Goal ${i + 1}: ${scorer}`);
}

// const odds = Object.entries(game.odds);
const odds = Object.values(game.odds);

console.log(odds);
let average = 0;
for (const odd of odds) {
  console.log(odd);
  average += odd;
}
// console.log(odds.length);
average /= odds.length;
console.log(`Average odd is ${Math.trunc(average)}.`);

for (const [team, odd] of Object.entries(game.odds)) {
  //   console.log(team, odd);
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd} `);
}

// Challenges
const gameEvents = new Map([
  [17, "⚽GOAL"],
  [36, "🔁Substitution"],
  [47, "⚽GOAL"],
  [61, "🔁Substitution"],
  [64, "🔶Yellow card"],
  [69, "🔴Red card"],
  [70, "🔁Substitution"],
  [72, "🔁Substitution"],
  [76, "⚽GOAL"],
  [80, "⚽GOAL"],
  [92, "🔶Yellow card"],
]);
// console.log(gameEvents);

// console.log(gameEvents.keys());
// console.log(gameEvents.values());

const events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);
// console.log(gameEvents);

// console.log(gameEvents.size);
console.log(
  `an event happened, on average , every ${90 / gameEvents.size} minutes`
);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `an event happened, on average , every ${time / gameEvents.size} minutes`
);

// function half() {}

// for (const [min, event] of gameEvents) {
//   if (min <= 45) {
//     const half = "[FIRST HALF]";
//     console.log(`⏱ ${half} ${min}: ${event}`);
//   } else if (min <= 90) {
//     const half = "[SECOND HALF]";
//     console.log(`⏱ ${half} ${min}: ${event}`);
//   } else {
//     const half = "[EXTRA TIME]";
//     console.log(`⏱ ${half} ${min}: ${event}`);
//   }
// }

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "FIRST" : "SECOND";
  console.log(`[${half} HALF] ${min}: ${event}`);
}

// Coding Challenge
/*
underscore_case
 first_name
Some_Variable
   calculate_AGE
delayed_departure

*/

// document.body.append(document.createElement("textarea"));
// document.body.append(document.createElement("button"));

const btn = document.querySelector("button");
btn.textContent = "Submit";
btn.style.backgroundColor = "teal";

btn.addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const rows = text.split("\n");

  // console.log(text);

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split("_");
    // console.log(row, first, second);
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${"⭐".repeat(i + 1)}`);
  }
});
