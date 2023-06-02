console.log("export");
const shoppingCart = 10;
export const cart = [];

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`the cart contains  ${product} of ${quantity} quantity`);
}
