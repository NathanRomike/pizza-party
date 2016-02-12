function Pizza(toppings, pizzaSize) {
  this.toppings = [toppings];
  this.pizzaSize = pizzaSize;
}

Pizza.prototype.getCheckoutBalance = function() {
  var minBalance = 5;
  if(this.pizzaSize === "medium") {
    minBalance += 3;
  }
  if(this.pizzaSize === "large") {
    minBalance += 2;
  }
  for (var i = 0; i < this.toppings.length; i++) {
    minBalance += 2;
  }
  return minBalance;
};
// $(document) {
//
// }
