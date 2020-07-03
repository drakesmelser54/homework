//problem 1
const pizzaToppings = ["pepperoni", "sausage", "spinach", "mushrooms"];

//problem2
function greetCustomer() {
  let x = "Welcome! Today our toppings are: ";
  for (let y of pizzaToppings) {
    x = x + y;
  }
  console.log(x);
}

//problem3
function getPizzaOrder(size, crust, ...toppings) {
  console.log(`One ${(size, crust)} crust pizza with ${toppings} coming up! `);
}
let order = getPizzaOrder("large", "thick", "sausage");

//problem4
function preparePizza(orderSize, orderCrust, orderToppings) {
  console.log("...Preparing Pizza...");
  const pizzaObject = {
    size: orderSize,
    crust: orderCrust,
    toppings: orderToppings
  };
  return pizzaObject;
}

//problem5
function servePizza(finalSize, finalCrust, ...finalToppings) {
  const pizzaObject = [finalSize, finalCrust, finalToppings];
  console.log(
    `Order up! Here's your ${finalSize} ${finalCrust} crust pizza with ${finalToppings}. Enjoy!`
  );
  return pizzaObject;
}
