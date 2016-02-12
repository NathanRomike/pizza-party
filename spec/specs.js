describe('Pizza', function() {
  it('Creates a new pizza', function() {
    var newPizza = new Pizza('cheese, pepperoni', 'medium');
    expect(newPizza.toppings).to.equal('cheese, pepperoni');
    expect(newPizza.pizzaSize).to.equal('medium');
  });
});
