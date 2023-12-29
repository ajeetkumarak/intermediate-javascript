"use strict";

// coding challenges

const poll = {
  question: "What is your favorite programming languange?",
  options: ["0: Javascript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question} this.options \n ${this.options.join(
          "\n"
        )}\n (Write option here)`
      )
    );
    console.log(answer);

    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++;

    // console.log(this.answers);
    this.displayResults();
    this.displayResults("string");
  },
  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are ${this.answers.join(", ")}`);
    }
  },
};

// poll.registerNewAnswer();

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, "string");
poll.displayResults.call({ answers: [5, 2, 3] }, "string");

//
const bookings = [];
const roomBooking = function (
  roomNum = 1,
  numPersons = 1,
  price = 150 * numPersons
) {
  const booking = {
    roomNum,
    numPersons,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
roomBooking("M204", 3);
roomBooking("M209", 5);
roomBooking("M211", undefined, undefined);
// ///
const room = "BM123";
const ajeet = {
  name: "Ajeet Kumar",
  id: 4568972321,
};
const checkIn = function (roomNum, person) {
  roomNum = "SE451";
  person.name = "Mr. " + person.name;

  if (person.id === 4568972321) alert("Checked in..");
  else alert("Wrong id..");
};
checkIn(room, ajeet);
console.log(room);
console.log(ajeet);

const newId = function (person) {
  person.id = Math.trunc(Math.random() * 1000000000);
  console.log(person.id);
};
newId(ajeet);
checkIn(room, ajeet);
