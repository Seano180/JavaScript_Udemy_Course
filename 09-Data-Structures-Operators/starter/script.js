'use strict';
console.log('⭐️⭐️⭐️⭐️⭐️⭐️ Start of Script.js script ⭐️⭐️⭐️⭐️⭐️');

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  names: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  oder: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ingredient1, ingredient2, ingredient3) {
    console.log(
      `Here is your delicious pasta with ingredients ${ingredient1}, ${ingredient2} and ${ingredient3}`
    );
  },
};
restaurant.orderDelivery({
  time: '22:30',
  address: 'Diggers Rest',
  mainIndex: 2,
  starterIndex: 2,
});

// **** Destructuring Arrays - Tutorial 105 ****

const { names, openingHours, categories } = restaurant;

console.log(names, openingHours, categories);

// Changing our variable names within the object ****IMPORTANT
const {
  names: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

// Default values ****IMPORTANT FOR API CALLS IN CASE DATA ISNT THERE
const { menu = [], starterMenu = (starters = []) } = restaurant;

console.log(menu, starterMenu); //menu will be empty array because it actually doesnt exist in the object at the start of the starter code

// Mutating variables within an Object
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj); // this must be wrapped in parenthesis to work (brackets)
console.log(a, b);

// Nested Objects
const {
  fri: { open, close },
} = hours;

console.log(open, close);

// **** The Spread Operator - Tutorial 106 ****

// adding new elements to an existing array <-- this was pre-ES6
const array = [7, 8, 9];
console.log(array);

const badNewArray = [1, 2, array[0], array[1], array[2]];
console.log(badNewArray);

// adding new elements to an existing array <-- Current method (Spread Operator)
const newArray = [1, 2, ...array];
console.log(newArray);

// add a new food to the existing menu
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// join arrays together
const joinArray = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(joinArray);

// Real world example
// const ingredients = [
//   prompt('Lets make pasta! ingredient 1?'),
//   prompt('Lets make pasta! ingredient 2?'),
//   prompt('Lets make pasta! ingredient 3?'),
// ];

// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// Create a new Object using an existing Object and the spread operator
const newRestaurant = { ...restaurant, owner: 'Seano' };
console.log(newRestaurant);
console.log(restaurant);
