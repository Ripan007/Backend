console.log("export module");
const shoppingCart = 10;
const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ quantity, product });
  console.log(
    `product is ${product} and quantity is ${quantity} added to the cart`
  );
};
