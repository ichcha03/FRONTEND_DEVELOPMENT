// Q8. Dynamic Discount Evaluator

// Cart array of objects
const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 }
];

// Calculate subtotal with category-based discounts using reduce()
let discountedSubtotal = cart.reduce(function (sum, product) {
  let discountRate = 0;

  if (product.category === "electronics") {
    discountRate = 0.10;
  } else if (product.category === "fashion") {
    discountRate = 0.05;
  }

  let discountedPrice = product.price - product.price * discountRate;
  return sum + discountedPrice;
}, 0);

// Apply extra 5% overall discount if total cart value > 50000
let finalTotal = discountedSubtotal;
if (discountedSubtotal > 50000) {
  finalTotal = discountedSubtotal - discountedSubtotal * 0.05;
}

console.log("Discounted Subtotal:", discountedSubtotal);
console.log("Final Total (after extra discount if any):", finalTotal);
