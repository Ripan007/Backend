const cart = [];

export const addCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(
    `the cart have the product is ${product} and  quantity is ${quantity}`
  );
};

const price = 777;
const funPrice = 999;

export { price, funPrice };
