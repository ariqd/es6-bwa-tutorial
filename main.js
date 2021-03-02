// Ambil element
const cart = document.getElementById("cart");

// ES5
// function addProduct(name, category) {
//   return {
//     name: name,
//     category: category,
//   };
// }

// var getProduct = addProduct("iPhone 11", "Gadget");

// console.log(getProduct);

// ES 6
function addProduct(name, category) {
  return {
    name,
    category,
  };
}

var getProduct = addProduct("iPhone 11", "Gadget");

// console.log(getProduct);

cart.innerHTML = `Product 1: ${getProduct.name},  category ${getProduct.category}`;
