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
  $("button#yes").click(function(event) {
    $("div.select-size").show();
    $("div#intro").hide();
  });
  
  $("button#no").click(function(event) {
    alert("Sorry, this is a pizza party!");
  });

  $("select#size-selection").change(function(event) {
    $("div.select-toppings").show();
  });

  $("input").click(function(event) {
    $("div.fire-button").show();
  });

  $("form#pizza-maker").submit(function(event) {
    event.preventDefault();
    var size = $(this).find("select#size-selection").val();
    var toppings = $(this).find("input:checkbox:checked").get();
    var newPizza = new Pizza(toppings, size);
    $("div.pizza-fire").show();
    $("h4#total").text("Current balance: $" + newPizza.getCheckoutBalance());
  });
});
