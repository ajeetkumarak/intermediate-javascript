// Exporting modules
console.log("Exporting modules");

const shippingCost = 11;
export const cart = [];

// export single value
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart.`);
};

// we can also export multiple things from a module using "Named Exports".
// main use case of Named Exports is to export multiple things.

const totalPrice = 178;
const totalQuantity = 81;

// named exports --- export more values
export { totalPrice, totalQuantity as tq };

// Default Exports
// we use default export when we only want to export one thing per module. i.e. called default modules
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} is delivered.`);
}
