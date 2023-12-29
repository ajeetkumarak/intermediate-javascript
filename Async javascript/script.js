"use strict";

const btn = document.querySelector(".btn-country");
const searchInput = document.getElementById("search__input");
const countriesContainer = document.querySelector(".countries--container");
const goBtn = document.querySelector(".submit");

// html content for country
const renderCountry = function (data, className = "") {
  // region
  let continents = "";
  const regions = data.continents;
  regions.forEach((reg) => {
    continents += `${reg}, `;
  });

  // for currency
  const currency = Object.values(data.currencies);
  const currencyName = currency[0].name;
  const currencySymbol = currency[0].symbol;

  // language
  let allLanguages = "";
  const languages = Object.entries(data.languages);
  languages.forEach((lang) => {
    let [key, value] = lang;
    allLanguages += `${value}, `;
  });
  // console.log(allLanguages);
  const para = className === "neighbour" ? "NEIGHBOUR COUNTRY" : "";

  const population =
    data.population < 100000
      ? data.population
      : `${(data.population / 1000000).toFixed(1)} M`;

  const html = `
      <div class="countries ">
        <article class="country ${className}">
        <p class="para">${para}</p>
          <img src="${data.flags.png}" alt="" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h3 class="country__region">${continents
              .slice(0, continents.length - 2)
              .toUpperCase()}</h3>
            <p class="country__row"><span>👬</span>${population} people</p>
            <p class="country__row"><span>🗣</span>${allLanguages.slice(
              0,
              allLanguages.length - 2
            )}</p>
            <p class="country__row"><span>${currencySymbol}</span> ${currencyName} </p>
          </div>
        </article>
      </div>`;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  // countriesContainer.style.opacity = 1;
};

// rendering message for error
const renderError = function (msg) {
  countriesContainer.insertAdjacentText("afterend", msg);
  // countriesContainer.style.opacity = 1;
};
// console.log(searchInput, goBtn);
// /////////////////////////////////////////////////////////////

// const getCountryData = function (countryName) {
//   const request = new XMLHttpRequest();
//   //   console.log(request);
//   request.open("GET", `https://restcountries.com/v3.1/name/${countryName}`);
//   request.send();

//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // region
//     let continents = "";
//     const regions = data.continents;
//     regions.forEach((reg) => {
//       continents += `${reg}, `;
//     });

//     // for currency
//     const currency = Object.values(data.currencies);
//     const currencyName = currency[0].name;
//     const currencySymbol = currency[0].symbol;

//     // language
//     let allLanguages = "";
//     const languages = Object.entries(data.languages);
//     languages.forEach((lang) => {
//       let [key, value] = lang;
//       allLanguages += `${value}, `;
//     });
//     // console.log(allLanguages);

//     const html = `
//       <div class="countries">
//         <article class="country">
//           <img src="${data.flags.png}" alt="" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name.common}</h3>
//             <h3 class="country__region">${continents
//               .slice(0, continents.length - 2)
//               .toUpperCase()}</h3>
//             <p class="country__row"><span>👬</span>${(
//               data.population / 1000000
//             ).toFixed(1)} M people</p>
//             <p class="country__row"><span>🗣</span>${allLanguages.slice(
//               0,
//               allLanguages.length - 2
//             )}</p>
//             <p class="country__row"><span>${currencySymbol}</span> ${currencyName} </p>
//           </div>
//         </article>
//       </div>`;

//     countriesContainer.insertAdjacentHTML("beforeend", html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData("india");
// getCountryData("usa");
// getCountryData("russia");

// // control from here
// const countriesOnPage = ["india", "usa", "russia"];

// goBtn.addEventListener("click", function () {
//   const country = searchInput.value;
//   if (countriesOnPage.every((page) => page !== country)) {
//     countriesOnPage.push(country);
//     getCountryData(country);
//   }
// });

// ///////////////////////////////////////////////////////////////////////////////////////////////////////

const getCountryAndNeighbour = function (countryName) {
  const request = new XMLHttpRequest();
  //   console.log(request);
  request.open("GET", `https://restcountries.com/v3.1/name/${countryName}`);
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // render contents on page
    renderCountry(data);

    // Get neighbour country 2
    const [neighbour] = data.borders;
    console.log(neighbour);
    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener("load", function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, "neighbour");
    });
  });
};

// getCountryAndNeighbour("india");

// control from here
// const countriesOnPage = [];

// goBtn.addEventListener("click", function (e) {
//   e.preventDefault();
//   // countriesContainer = "";
//   const country = searchInput.value;
//   getCountryAndNeighbour(country);
//   searchInput = "";
// });
//

// *****************************************************************************
// old way for AJAX call
// const request = new XMLHttpRequest();
// request.open("GET", "https://restcountries.eu/rest/v2/name/india");
// request.send();

// new way for AJAX Calls
// const request = fetch(`https://restcountries.com/v3.1/name/india`);
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };
// _____________________________________________________________________________________________________________________

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(
//       (response) => {
//         console.log(response);

//         if (!response.ok)
//           throw new Error(
//             `Country not found.. (${response.status}) Try again!!`
//           );

//         return response.json();
//       }
//       // (err) => alert(err)             ****note***-- we handle errors with "catch" method happen anywhere in fetching to settle promises
//     )
//     .then((data) => {
//       console.log(data);
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];

//       if (!neighbour) return;

//       // country border
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(
//       (response) => {
//         if (!response.ok)
//           throw new Error(`Country not found (${response.status})`);

//         return response.json();
//       }
//       // (err) => alert(err)
//     )
//     .then((data) => {
//       renderCountry(data[0], "neighbour");
//       // console.log(data);
//     })
//     .catch((err) => {
//       // alert(err);
//       console.log(`${err}`);
//       renderError(`Something went wrong!!  ${err.message}`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// -_________________________________________________________*******************_____________________________________________

const getJSON = function (url, errorMsg = "Something went wrong.") {
  return fetch(url).then((response) => {
    // console.log(response);
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

const getCountryData = function (country) {
  // country 1
  getJSON(
    `https://restcountries.com/v3.1/name/${country}`,
    "Country not found."
  )
    .then((data) => {
      renderCountry(data[0]);
      console.log(data);

      const neighbour = data[0].borders;
      // console.log(neighbour, neighbour === undefined);

      if (neighbour === undefined) throw new Error(`No neighbour found!!`);

      // country border
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour[0]}`,
        "Country not found."
      );
    })
    .then((data) => {
      console.log(data);
      renderCountry(data[0], "neighbour");
    })
    .catch((err) => {
      console.log(err.message);
      renderError(`Something went wrong!!  ${err.message}. Try Again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// getCountryData("india");
// getCountryData("portugal");
// getCountryData("sdgsgg");

// btn.addEventListener("click", function () {
//   getCountryData("australia");
// });

// ------------------------------------------------------------------------------------
/*
const whereAmI = function (lat, lng) {
  const myApiKey = "213255422388488531360x36408";
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=${myApiKey}`)
    .then((response) => {
      if (!response.ok)
        throw new Error(`Problem withgeocoding ${response.status}`);
      console.log(response);
      return response.json();
    })
    .then((data) => {
      // console.log(data.error);
      if (data.error)
        throw new Error(`No Place at this coodinates (${lat}, ${lng})`);
      console.log(`You are in ${data.city} in ${data.country}.`);

      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(data);

      const countryData = data[1] && data[0] ? data[1] : data[0];
      console.log(countryData);
      renderCountry(countryData);

      // renderCountry(data[0]);

      const neighbour = countryData.borders;
      // const neighbour = data[0].borders;
      console.log(neighbour);

      if (!neighbour) throw new Error("No neighbour country!!");

      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour[0]}`);
    })
    .then((res) => res.json())
    .then((data) => renderCountry(data[0], "neighbour"))
    .catch((err) => {
      // console.log(err);
      console.error(`${err.message}.❕❕`);
      renderError(`${err.message}`);
    });
};
*/
// whereAmI(52.508, 13.381);
// whereAmI(-33.933, 18.474);
// whereAmI(48.856, 2.352);
// whereAmI(28.704, 77.102);
// whereAmI(19.037, 72.873);

// ----------------------------------The Event loop-------------------------------------
/*
console.log("Test Start");

setTimeout(() => console.log("0 sec later"), 0);
Promise.resolve("Resolved Promise 1").then((res) => console.log(res));
Promise.resolve("Resolved Promise 2").then((res) => {
  for (let i = 1; i < 1111; i++) {}
  console.log(res);
});
console.log("Test End");
*/

//The callback of resolved promise will be put on the 'micro-task queue' and the 'micro-task queue' has priority over the callback queue.
// the code from the micro-task queue should be executed first i.e. the callback feom micro-task queue will be executed firts.
//
// Micro-tasks have priprity over regular callbacks, AND if one of the micro-tasks take a long time to run then the timer will actually be delayed and not run after the given time(1s)

// ------------------------------Building A Promise ------------------
/*
console.log(Math.random());
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log("Lottery draw is happening NOWWW");
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve("You Win oohu");
    } else {
      reject(new Error("You lost your moneeyyy"));
    }
  }, 2000);
});

lotteryPromise
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
*/

// Promisifying seTimeOut
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

/*
wait(3)
  .then(() => {
    console.log("I waited for 3 seconds");
    return wait(1);
  })
  .then(() => console.log("one more second....."));

//
//Easy way to create a fulfilled or a rejected promise immediately  -----------------
Promise.resolve("ajeet").then((x) => console.log(x));
Promise.reject(new Error("Problem!")).catch((x) => console.error(x));
*/
// -------------------------------------Promisifying the Geolocation API--------
// console.log("Getting location");

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   (position) => resolve(position),
    //   (err) => reject(err)
    // )
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// getPosition().then((pos) => {
//   console.log(pos);
//   console.log(pos.coords.latitude, pos.coords.longitude);
//   // whereAmI(pos.coords.latitude, pos.coords.longitude);
// });

const whereAmI = function () {
  const myApiKey = "213255422388488531360x36408";

  getPosition()
    .then((pos) => {
      console.log(pos);
      const { latitude: lat, longitude: lng } = pos.coords;
      console.log(lat, lng);

      return fetch(
        `https://geocode.xyz/${lat},${lng}?geoit=json&auth=${myApiKey}`
      );
    })
    .then((response) => {
      if (!response.ok)
        throw new Error(`Problem with geocoding ${response.status}`);
      console.log(response);
      return response.json();
    })
    .then((data) => {
      // console.log(data.error);
      if (data.error)
        throw new Error(`No Place at this coodinates (${lat}, ${lng})`);
      console.log(`You are in ${data.city}, ${data.country}.`);

      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      const countryData = data[1] && data[0] ? data[1] : data[0];
      console.log(countryData);
      renderCountry(countryData);

      const neighbour = countryData.borders;
      console.log(neighbour);

      if (!neighbour) throw new Error("No neighbour country!!");

      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour[0]}`);
    })
    .then((res) => res.json())
    .then((data) => renderCountry(data[0], "neighbour"))
    .catch((err) => {
      // console.log(err);
      console.error(`${err.message}.❕❕`);
      renderError(`${err.message}`);
    });
};

btn.addEventListener("click", function () {
  whereAmI();
});

// -------------------------------Coding Challenge---------------------

const createImage = function () {
  const unsplash_key = "ZKiLmxJ973rUjiezi84_81bVYHhKRe8n5U3weAII5Z0";
  fetch(`https://api.unsplash.com/photos/?client_id=${unsplash_key}`)
    .then((response) => {
      console.log(response);
      if (!response.ok) throw new Error("image not get...");

      return response.json();
    })
    .then((data) => {
      const i = Math.floor(Math.random() * 10);
      console.log(data, i);
      const url = data[i].urls.raw;
      console.log(url);
      const imageContainer = document.createElement("img");
      imageContainer.src = url;
      imageContainer.className = "image-front";
      countriesContainer.insertAdjacentElement("afterbegin", imageContainer);
    })
    .catch((err) => console.error(err));
};

createImage();

/*
const wait = function (seconds) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector(".images");

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const image = document.createElement("img");
    image.src = imgPath;
    image.addEventListener("load", function () {
      imgContainer.append(image);
      resolve(image);
    });
    image.addEventListener("error", function () {
      reject(new Error("Image not found"));
    });
  });
};

let currentImg;

createImage("images/sun.jpg")
  .then((img) => {
    currentImg = img;
    console.log("Image 1 loaded.");
    return wait(3);
  })
  .then(() => {
    currentImg.style.display = "none";
    return createImage("images/zzz.jpg");
  })
  .then((img) => {
    currentImg = img;
    console.log("Image 2 loaded.");
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = "none";
  })
  .catch((err) => console.error(err));
*/
//                        ****************************************
// -------------------------Consuming Promises with Async_Await---------------------

const getposition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereInWorld = async function () {
  const myApiKey = "213255422388488531360x36408";
  try {
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse Geocoding
    const resGeo = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json&auth=${myApiKey}`
    );

    if (!resGeo.ok) throw new Error("Problem while getting location data");

    const dataGeo = await resGeo.json();
    console.log(dataGeo);

    // Country Data
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    );

    if (!res.ok) throw new Error(`Problem while getting country`);

    // console.log(res);
    const data = await res.json();
    console.log(data);
    const countryData = data[0] && data[1] ? data[1] : data[0];
    renderCountry(countryData);

    return `You are in ${dataGeo.city}, ${dataGeo.country}.`;
  } catch (err) {
    console.error(err);
    renderError(`Something wrong ${err.message}`);

    // Reject promise returned from async function
    throw err;
  }
};

console.log("1: will get location");
// const city = whereInWorld();
// console.log(city);

// whereInWorld()
//   .then((city) => console.log(`2: ${city}`))
//   .catch((err) => console.error(`2: ${err.message} ?????`))
//   .finally(() => console.log("3: Finished getting location"));

//conversion into async, await----------
(async function () {
  try {
    const city = await whereInWorld();
    console.log(`2: ${city}`);
  } catch (err) {
    console.error(`2: ${err.message} ????`);
  }
  console.log("3: Finished getting location");
})();

// console.log("2: Finished getting location");
// whereInWorld("portugal");

// Error Handling with try... catch
// try {
//   let y = 1;
//   const x = 7;
//   x = 9;
// } catch (err) {
//   alert(err.message);
// }

// --------------------------Running Promises in Parallel------------------
const get3Countries = async function (c1, c2, c3) {
  try {
    //   const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    //   const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    //   const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
    // console.log(data1.capital, data2.capital, data3.capital);

    // if one of promise reject, then the whole promise rejects as well.
    // one rejected promise is enough for entire things to reject as well.
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);
    console.log(data.map((d) => d[0].capital[0]));
    console.log(data);
  } catch (err) {
    console.error(err.message);
  }
};
get3Countries("portugal", "russia", "france");
// This is called 'Promise.all Combinator'
// it's called the combinator function because it allows us to combine multiple promises
//

// ---------------------------------Three Others Promise Combinators ------------------------------
// 1. Promise.race          2. Promise.allSettled       3. Promise.any

//1. Promise.race
// it is just like all other combinators, receives an array of promises and it also returns a promise.
// this promise returned by Promise.race is settled as soon as one of the input promise settles.
//  'settled' simply means that a value is available, but it doesn't matter if the promise got rejected or fulfilled
// in Promise.race basically the first settled promise wins the race.

(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/india`),
    getJSON(`https://restcountries.com/v3.1/name/egypt`),
    getJSON(`https://restcountries.com/v3.1/name/mexico`),
  ]);
  console.log(res[0]);
})();

// Promise.race is very useful in real world to prevent against never ending promises or also very long running promises.

const timeOut = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error("Request took too long.."));
    }, sec * 1000);
  });
};
Promise.race([
  getJSON(`https://restcountries.com/v3.1/name/tanzania`),
  timeOut(1),
])
  .then((res) => console.log(res[0]))
  .catch((err) => console.error(err));

// 2. Promise.allSettled   --   from ES2020
// it takes in an array of promises again, it will simply return an array of all the settled promises; no matter, if the promises got rejected or not
//it similar to Promise.all in regard that it also returns an array of all the results,
// BUT, the difference is that Promise.all will short circuit as soon as one promise rejects, but Promise.allSettled never short circuits.

Promise.allSettled([
  Promise.resolve("success"),
  Promise.reject("ERROR"),
  Promise.resolve("Another success"),
])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

// Promise.any  ----   ES20221
// Promise.any()([
//   Promise.resolve("success"),
//   Promise.reject("ERROR"),
//   Promise.resolve("Another success"),
// ])
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));
