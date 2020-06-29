//create 2 variables and set them to name of place and number of topping.//
const pizzaPlace = "Olivie's on Shaw";
let numberOfToppings = 9;

//print the variables and their types//
console.log(
  pizzaPlace,
  typeof pizzaPlace,
  numberOfToppings,
  typeof numberOfToppings
);

//create a template literal that uses variables to construct a short sentence//
console.log(
  `One of my favorite restaurants to go to in St. Louis is ${pizzaPlace}. It's this amazing combination of French and Italian pizza that utlizes ${numberOfToppings} toppings to make sure you're never tired of their menu!`
);

//create an if statement that prints "Quality Over Quantity" if you offer less than 10 toppings//
//It will say "Whole Lot of Pizza" if you offer 10 or more toppings.//

if (numberOfToppings < 10) {
  console.log("Quality Over Quantity.");
} else console.log("Whole Lot of Pizza!");

//bonus challenge//
//Use a Loop to print all of the even numbers from 1 to numberOfToppings (or 10)//
for (let i = 1; i <= numberOfToppings; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//or if (!i % 2) //
