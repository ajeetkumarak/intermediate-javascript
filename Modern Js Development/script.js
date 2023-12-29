// Importing Modules
import { addToCart, totalPrice as price, tq } from "./shoppingCart.js";
console.log("Importing modules");

// // console.log(shippingCost);
// addToCart("bread", 6);
// console.log(price, tq);

// // export all at once from a module
// import * as shoppingCart from "./shoppingCart.js";
// console.log(shoppingCart.totalPrice);
// shoppingCart.addToCart("orange", 4);

// // default export
// import add from "./shoppingCart.js";
// add("pizza", 7);

// // we can combine both of them in same import statement
// import add, { addToCart, totalPrice as price, tq } from "./shoppingCart.js";
// add("Burger", 9);
// console.log(tq, price);

// Note: in practice, we usually never mix Named and Default Exports in the same module.

//***  imports are in fact, a life connection to exports.
import add, { cart } from "./shoppingCart.js";
add("Burger", 9);
add("Pizza", 9);
add("Barbeeque", 9); //  Hence, imports are not copies of the export. They are instead like a live connection,

console.log(cart);
//  ---------------------------------------------------------------------
// --------------- The module Pattern              -----------------------------

const shoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 11;
  const totalPrice = 17;
  const totalQuantity = 78;

  const addToCart = function (product, quantity) {
    cart.push({ quantity, product });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost}).`
    );
  };

  const orderStock = function (product, quantity) {
    cart.push({ quantity, product });
    console.log(`${quantity} ${product} added to cart.`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();
shoppingCart2.addToCart("bottles", 4);
shoppingCart2.addToCart("vodka", 4);
// console.log(shoppingCart2.shippingCost);

// ---------------------------------------------------------------------------------
// -----------------CommonJS modules------------------
// this module is important for us, because they have been used in Node.js for all of its existience.
// Es Modules have actually been implemented in Node.js
// Node.js is a way of running javascript on a web server outside of a browser.
//all modules in the NPM repository still use the CommonJS module system
// because, NPM was originally ony intended for node which uses CommonJS.
// Only later, NPM became the standard repository, for the whole javascript world.

/*
// Export
export.addToCart = function (product, quantity) {
    cart.push({ quantity, product });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost}).`
    );
  };   //---- This is not going to work in browser, but it would work in Node.js

  };   
  
  
  // Import   ---- This is not going to work in browser, but it would work in Node.js 
const {addToCart} = require('./shoppingCart.js')
*/

// mpm
// import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";
import cloneDeep from "lodash-es";

const state = {
  cart: [
    { product: "bread", quantity: 5 },
    { product: "Pizza", quantity: 7 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

console.log(stateClone);
state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}
