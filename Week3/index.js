//problem 1
const pizzaToppings = ["pepperoni", "sausage", "spinach", "mushrooms"];

//problem2
function greetCustomer() {
  let x = "Welcome! Today our toppings are: ";
  for (let topping of pizzaToppings) {
    x += `${topping}, `;
  }
  console.log(x);
}

//problem3

greetCustomer();
function getPizzaOrder(size, crust, ...toppings) {
  let order = `One ${(size, crust)} crust pizza with `;
  for (let topping of toppings) {
    order += `${topping}, `;
  }
  console.log(`${order}coming up!`);
  return [size, crust, toppings];
}
let customerOrder = getPizzaOrder("large", "thin", "pineapple", "pepperoni");

//problem4
function preparePizza(orderSize, orderCrust, orderToppings) {
  console.log("...Preparing Pizza...");
  return {
    size: orderSize,
    crust: orderCrust,
    toppings: orderToppings
  };
}
let finalPizza = preparePizza(customerOrder);

//problem5
function servePizza(pizza) {
  let orderReady = `Order up! One ${pizza.size} ${pizza.crust} crust pizza with `;
  for (let topping of pizza.toppings) {
    orderReady += `${topping}, `;
  }
  console.log(`${orderReady}Enjoy!`);
  return pizza;
}

//call all functions
servePizza(finalPizza);
greetCustomer();
console.log(
  servePizza(
    preparePizza(getPizzaOrder("Large", "thin", "peppers", "anchovies"))
  )
);
