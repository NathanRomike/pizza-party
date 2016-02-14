describe('Pizza', function() {
  var newPizza = new Pizza(["Pepperoni", "Green Peppers"], 'medium');
  it('Creates a new pizza', function() {
    expect(newPizza.toppings).to.eql(["Pepperoni", "Green Peppers"]);
    expect(newPizza.pizzaSize).to.equal('medium');
  });

  it('Gets the final cost of the order', function() {
    expect(newPizza.getCheckoutBalance()).to.equal(12);
  });

  it('Collects the pizzas for this order', function() {
    var firstPizza = new Pizza(["Pepperoni", "Green Peppers", "Mushrooms"], 'large');
    expect(order()).to.equal(newPizza, firstPizza);
  });
});
