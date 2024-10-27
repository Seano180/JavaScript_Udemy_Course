'use strict';
console.log('⭐️⭐️⭐️⭐️⭐️⭐️ Start of Script.js script ⭐️⭐️⭐️⭐️⭐️');

const weekday = ['mon', 'tue', 'wed', 'thurs', 'friday', 'sat', 'sun'];

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
  // ES6 Enhanced Object Literals
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

  order: function (starterIndex, mainIndex) {
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
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
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

// **** Rest Pattern and Paramaters - Tutorial 107 ****

// ** Destructuring
// SPREAD, because it is on the RIGHT side of the =
const arr = [1, 2, ...[3, 4]];
console.log(arr);

// REST, because it is on the LEFT side of the =
const [x, y, ...others] = [1, 2, 3, 4, 5];
console.log(x, y, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// ** Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(4, 5, 6, 7, 8);
add(3, 6, 5, 7, 4, 2);

// restaurant example using the Rest pattern
restaurant.orderPizza('mushrooms', 'onion', 'olives');

// NOTE: SPREAD is the opposite of REST

// **** Short Circuiting && and || - Tutorials 108 ****

// Use ANY data type, return ANY data type, and short-circuiting
console.log(' ---- OR ----');

console.log(3 || 'Seano'); // truthy
console.log('' || 'Seano'); // falsy
console.log(true || 0); // truthy
console.log(undefined || null); // falsy

// example
const guests = restaurant.numGuests || 10; // numGuests doesnt exist, so this is a falsy value, therefore the OR operator will set 10 as the default
console.log(guests);

console.log(' ---- && ----'); // works in the OPPPOSITE way of the OR operator

console.log(0 && 'Seano'); // && short circuits when the first value is falsy
console.log('' && 'Seano'); // falsy
console.log(true && 0); // truthy
console.log(undefined && null); // falsy

// exmaple
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// *** IMPORTANT ***
// OR returns the first truthy value, or the last truthy value if they are all falsy

// AND returns the first falsy value, or last value if all are all truthy

//
// **** The Nullish Coalescing Operator (??) - Tutorial 109 ****

// Nullish values are Null and Undefined - (does not include 0 or " ")
restaurant.numGuests = 0;
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);

// **** Logical Assignment Operators - Tutorial 110 ****
const rest1 = {
  name: 'Capri',
  numGuests: 20,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};
// creating a short circuit to push the numGuests value in to the rest2
rest2.numGuests = rest2.numGuests || 10;
console.log(rest2);

// the below is the same as the above, similar to the += operators
rest1.numGuests ||= 10;
console.log(rest1);

// logical nullish operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;
console.log(rest1);
console.log(rest2);

// replace the owner with anonymous
rest2.owner = rest2.owner && '<Anonymous>';
console.log(rest2);

// making the above shorter
rest2.owner &&= '*Anonymous*';
console.log(rest2);

// **** Looping Arrays: The for-of Loop - Tutorial 112 ****
// Lets loop through the menus
const menuNew = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menuNew) console.log(item); // for of loop

// **** Optional Chaining (?.) - Tutorial 114 ****

const day = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const dayz of day) {
  const open = restaurant.openingHours[dayz]?.open ?? 'closed';
  console.log(`On ${dayz}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [
  {
    namez: 'Seano',
    email: 'hello@gmail.com',
  },
];
console.log(users[0]?.namez ?? 'User array empty');

// **** Looping Objects: Object Keys, Values, and Entries - Tutorial 115 ****

// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openString = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openString += `${day},`;
}
console.log(openString);

// Poprerty VALUES
const values = Object.values(openingHours);
console.log(values);

// Object ENTRIES (Entire Object)
const entries = Object.entries(openingHours);
console.log(entries);

// Looping an Entire Object using the For Of loop and destructuring
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

// **** Sets - Tutorial 117 ****

// sets require an iterable arguement - in this case, we pass in an aray
// sets remove the duplicates and only show you what is available in the iterable
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pasta',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(orderSet);

console.log(orderSet.size); // dont use .length for sets

console.log(orderSet.has('Pizza')); //checks the set for this string

orderSet.add('Garlic Bread'); // adds string in to the set - this is similar to "includes" for an array

orderSet.delete('Risotto'); // this removes the string from the set

for (const order of orderSet) console.log(order); // we can use sets in for-of loops because it is iterable

// Example 1
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffSet = new Set(staff);
console.log(staffSet);

// Example 2 - pushing the set in to an array using spread operator
const staff1 = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffSet1 = [...new Set(staff1)];
console.log(staffSet1);

// using sets to determine size using the ".size" command
console.log(new Set('SeanoSheridan').size);

// **** Tutorial 118 - Maps: Fundamentals ****

const resto = new Map();
resto.set('name', 'Classico Italiano');
resto.set(1, 'Firenze, Italy');
console.log(resto.set(2, 'Lisbon, Portugal'));

resto
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(resto.get('name'));
console.log(resto.get(true));
console.log(resto.get(1));

console.log(resto.has('categories"'));
resto.delete(2);
console.log(resto);

const arrMap = [1, 2];
resto.set(arrMap, 'Test');
resto.set(document.querySelector('h1'), 'Heading');
console.log(resto);
