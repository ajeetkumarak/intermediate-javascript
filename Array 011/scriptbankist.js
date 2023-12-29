"use strict";

//  Data
const account1 = {
  owner: "Ajeet Kumar",
  movements: [200, 450, -400, 3000, -700, -140, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  movementsDates: [
    "2023-02-05T21:31:17.178Z",
    "2023-02-10T21:31:17.178Z",
    "2023-02-12T21:31:17.178Z",
    "2023-02-15T21:31:17.178Z",
    "2023-02-25T21:31:17.178Z",
    "2023-02-26T21:31:17.178Z",
    "2023-02-27T21:31:17.178Z",
    "2023-02-28T21:31:17.178Z",
  ],
  currency: "EUR",
  locale: "pt-PT", //  de-DE
};

const account2 = {
  owner: "Angela Yu",
  movements: [600, 1450, -40, 3000, -700, -140, 170, 1500],
  interestRate: 1.5, // %
  pin: 2222,
  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2011-10-14T21:31:17.178Z",
    "2012-09-16T21:31:17.178Z",
    "2015-07-11T21:31:17.178Z",
    "2018-12-25T21:31:17.178Z",
    "2019-11-28T21:31:17.178Z",
    "2018-10-25T21:31:17.178Z",
    "2019-11-28T21:31:17.178Z",
  ],
  currency: "USD",
  locale: "en-US", //  de-DE
};

const account3 = {
  owner: "Akash Nil",
  movements: [2007, 450, -440, 3000, -700, -1740, 70, 1100],
  interestRate: 1.7, // %
  pin: 3333,
  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2011-10-14T21:31:17.178Z",
    "2012-09-16T21:31:17.178Z",
    "2015-07-11T21:31:17.178Z",
    "2018-12-25T21:31:17.178Z",
    "2019-11-28T21:31:17.178Z",
    "2018-10-25T21:31:17.178Z",
    "2019-11-28T21:31:17.178Z",
  ],
  currency: "INR",
  locale: "en-IN", //  de-DE
};

const account4 = {
  owner: "Ali Amir",
  movements: [2050, 450, -4080, 3000, -70, -1240, 70, 1300],
  interestRate: 0.7, // %
  pin: 3333,
  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2011-10-14T21:31:17.178Z",
    "2012-09-16T21:31:17.178Z",
    "2015-02-11T21:31:17.178Z",
    "2018-12-25T21:31:17.178Z",
    "2019-11-28T21:31:17.178Z",
    "2018-10-25T21:31:17.178Z",
    "2019-11-28T21:31:17.178Z",
  ],
  currency: "EUR",
  locale: "en-GB", //  de-DE
};

const account5 = {
  owner: "Mukesh Ambani",
  movements: [2000, 4530, -4800, 300, -1700, -10, 370, 1800],
  interestRate: 2.8, // %
  pin: 4444,
  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2011-10-14T21:31:17.178Z",
    "2012-05-16T21:31:17.178Z",
    "2015-08-11T21:31:17.178Z",
    "2018-12-25T21:31:17.178Z",
    "2019-11-28T21:31:17.178Z",
  ],
  currency: "EUR",
  locale: "en-US", //  de-DE
};

const accounts = [account1, account2, account3, account4, account5];

//from index.html      (SELECTORS)

const labelWelcome = document.querySelector(".welcome");
const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");
const labelBalance = document.querySelector(".balance__value");
const labelDate = document.querySelector(".date");
const labelSumIN = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");

const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
// close account
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const labelTimer = document.querySelector(".timer");
// /////////////////

const formatMovementsDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  // console.log(daysPassed);

  if (daysPassed === 0) return `Today`;
  if (daysPassed === 1) return `Yesterday`;
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    // const day = `${date.getDate()}`.padStart(2, 0);
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);
    // const year = date.getFullYear();

    // return `${day}/${month}/${year}`;

    return new Intl.DateTimeFormat(locale).format(date);
  }
};

const formatCurrency = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
};
// const z = formatCurrency(100, "en-US", "EUR");
// console.log(z);

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = "";
  // console.log(movements);
  const movementSorts = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movementSorts.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawl";

    const date = new Date(acc.movementsDates[i]);
    // console.log(date);
    const displayDate = formatMovementsDate(date, acc.locale);
    // console.log(displayDate);

    // const formattedMov = new Intl.NumberFormat(acc.locale, {
    //   style: "currency",
    //   currency: acc.currency,
    //   // currency: "USD",
    // }).format(mov);

    const formattedMov = formatCurrency(mov, acc.locale, acc.currency);
    // console.log(formattedMov);

    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">
          ${i + 1} ${type}</div>
          <div class="movements__date">${displayDate}</div>
          <div class="movements__value">${formattedMov}</div>

        </div>
        `;
    // <div class="movements__value">${mov.toFixed(2)} €</div>;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

// displayMovements(account1.movements);

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  // labelBalance.textContent = `${acc.balance} € `;

  labelBalance.textContent = formatCurrency(
    acc.balance,
    acc.locale,
    acc.currency
  );
};
// calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (acc) {
  const formattedBalance = formatCurrency(
    acc.balance,
    acc.locale,
    acc.currency
  );

  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  // labelSumIN.textContent = `${incomes} €`;
  labelSumIN.textContent = formatCurrency(incomes, acc.locale, acc.currency);

  const outcomes = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  // labelSumOut.textContent = `${Math.abs(outcomes)} €`;
  labelSumOut.textContent = formatCurrency(outcomes, acc.locale, acc.currency);

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  // labelSumInterest.textContent = `${Math.round(interest)} €`;
  labelSumInterest.textContent = formatCurrency(
    interest,
    acc.locale,
    acc.currency
  );
};
// calcDisplaySummary(account1.movements);

// for bankist app: usernames
const createUsernames = function (acc) {
  acc.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};

createUsernames(accounts);
console.log(accounts);

// update UI
const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display Summary
  calcDisplaySummary(acc);
};

const startLogoutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    // in each call, print the remaining time to UI

    labelTimer.textContent = `${min}:${sec}`;

    // When 0 seconds, stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      containerApp.style.opacity = 0;
      // Display UI and message
      labelWelcome.textContent = `Hey man, Login to get started`;
    }

    // decerease 1s
    time--;
  };
  // set time to 5 minutes
  let time = 120;

  // call the timer every second
  tick();
  const timer = setInterval(tick, 1000);

  return timer;
};

// -----------------------------------------------------------------
// EVENT handlers
let currentAccount, timer;

// console.log(currentAccount);

//  FAKE ALWAYS LOGGED IN ----------------------------------
currentAccount = account1;
console.log(currentAccount);
updateUI(currentAccount);
containerApp.style.opacity = 105;

// experimenting API
const now = new Date();
const options = {
  hour: "numeric",
  minute: "numeric",
  // day: "numeric",
  day: "2-digit",
  // month: "numeric",
  month: "long",
  // month: "2-digit",
  year: "numeric",
  weekday: "long",
};
const locale = navigator.language;
console.log(locale);
labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now);
// ----------------------------------------------------------

btnLogin.addEventListener("click", function (e) {
  // prevent form from submitting
  e.preventDefault();
  // console.log("LOGIN");
  // console.log(inputLoginUsername.value);
  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // console.log("Now Login");

    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.classList.add("opacity");

    //  Create current date and time
    // const now = new Date();
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hours = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = now;
    // labelDate.textContent = `${day}/${month}/${year}, ${hours}:${min}`;

    const now = new Date();
    const options = {
      hour: "numeric",
      minute: "numeric",
      // day: "numeric",
      day: "2-digit",
      // month: "numeric",
      // month: "long",
      month: "2-digit",
      year: "numeric",
      weekday: "long",
    };
    // const locale = navigator.language;
    // console.log(locale);
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    // timer
    if (timer) clearInterval(timer);
    timer = startLogoutTimer();

    // update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault(); //  it prevent the default behaviour of form i.e. reloading

  const amount = Number(inputTransferAmount.value);
  console.log(amount);
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  console.log(receiverAcc);

  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    receiverAcc &&
    amount <= currentAccount.balance &&
    receiverAcc?.username !== currentAccount.username
  ) {
    console.log(`Transfer Valid.`);

    // doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // update UI
    updateUI(currentAccount);

    // reset timer
    clearInterval(timer);
    timer = startLogoutTimer();
  }
});

// loan transfer
btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);
  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    setTimeout(function () {
      // add movement
      currentAccount.movements.push(amount);

      // add loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      // update UI
      updateUI(currentAccount);

      // reset timer
      clearInterval(timer);
      timer = startLogoutTimer();
    }, 3000);
  }
  inputLoanAmount.value = "";
});

// close the account
btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("deleted.");

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    console.log(index, "deleated");

    // delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.classList.remove("opacity");
  }

  inputCloseUsername.value = inputClosePin.value = "";
});

// sorting
let sorted = false;
console.log(sorted);
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  console.log(sorted);
  sorted = !sorted;
  console.log(sorted);
});
console.log(sorted);

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const now = new Date();
// const day = `${now.getDate()}`.padStart(2, 0);
// const month = `${now.getMonth() + 1}`.padStart(2, 0);
// const year = now.getFullYear();
// const hours = now.getHours();
// const min = now.getMinutes();
// labelDate.textContent = now;
// labelDate.textContent = `${day}/${month}/${year}, ${hours}:${min}`;

const num = 325622.25;

const optionsNum = {
  // style: "unit",
  // style: "percent",
  style: "currency",
  currency: "EUR",

  // unit: "mile-per-hour",
  // unit: "celsius",
  // useGrouping: false,
};

console.log("US: ", new Intl.NumberFormat("en-US", optionsNum).format(num));
console.log(
  "Germany: ",
  new Intl.NumberFormat("de-DE", optionsNum).format(num)
);
console.log("India: ", new Intl.NumberFormat("en-IN", optionsNum).format(num));
console.log("Syria: ", new Intl.NumberFormat("ar-SY", optionsNum).format(num));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, optionsNum).format(num)
);

// Timers_setTimeout and setInterval

// the setTimeout timer runs just once after a defined time
//  the setInterval timer keeps running basically forever, until we stop it.

const ingredients = ["olives", "pescado", "queso"];
const pizzaTimer = setTimeout(
  (ing1, ing2, ing3) =>
    console.log(`Here is your Pizza🍕 with ${ing1} & ${ing2}, ${ing3}`),
  3000,
  // "olives",
  // "spinach"
  ...ingredients
);
console.log("Waiting ....");

if (ingredients.includes("spinach")) clearTimeout(pizzaTimer);

// setInterval
setInterval(function () {
  const now = new Date();
  const hour = `${now.getHours()}`.padStart(2, 0);
  const min = `${now.getMinutes()}`.padStart(2, 0);
  const sec = `${now.getSeconds()}`.padStart(2, 0);
  // console.log(`${hour}:${min}:${sec}`);
}, 1000);
