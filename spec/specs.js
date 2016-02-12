describe('Pizza', function() {
  var newPizza = new Pizza('cheese, pepperoni', 'medium');
  it('Creates a new pizza', function() {
    expect(newPizza.toppings).to.eql(['cheese, pepperoni']);
    expect(newPizza.pizzaSize).to.equal('medium');
  });

  it('Gets the final cost of the order', function() {
    expect(newPizza.getCheckoutBalance).to.equal(10);
  });
});
