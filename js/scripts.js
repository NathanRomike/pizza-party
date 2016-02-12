function Pizza(toppings, pizzaSize) {
  this.toppings = toppings;
  this.pizzaSize = pizzaSize;
}

Pizza.prototype.getCheckoutBalance = function() {
  var minBalance = 5;
  if(this.pizzaSize === "medium") {
    minBalance += 3;
  }
  if(this.pizzaSize === "large") {
    minBalance += 5;
  }
  for (var i = 0; i < this.toppings.length; i++) {
    minBalance += 2;
  }
  return minBalance;
};
$(function() {
  $("form#pizza-maker").submit(function(event) {
    event.preventDefault();
    var size = $(this).find("select#size-selection").val();
    var toppings = $(this).find("input:checkbox:checked").get();
    var newPizza = new Pizza(toppings, size);
    console.log(toppings);
    $("h4#total").show();
    $("h4#total").text("$" + newPizza.getCheckoutBalance());
  });
});
