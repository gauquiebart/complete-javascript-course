'use strict';

// Data needed for a later exercise
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
    name: 'Classico Italiano',
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

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    //do immediate destructuring of this object
    //can call method with variables in any order
    //and set default values if none specified
    orderDelivery: function ({starterIndex = 1, mainIndex = 2, time, address}) {
        console.log(starterIndex, mainIndex, time, address);
    },


};


/*
restaurant.orderDelivery({
    time: `23:30`,
    address: `via de sole, 12`,
    mainIndex: 2,
    starterIndex: 2
})

restaurant.orderDelivery({
    time: `23:30`,
    address: `via de sole, 12`
})
*/

/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//destructuring an array
const [x, y, z] = arr;

console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;

//switching variables using destructuring
[main, secondary] = [secondary, main]
console.log(main, secondary);

//receive 2 return values from the function; and immediately create 2 values from a function call
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

//default values (otherwise undefined)
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

*/

/*
// object destructuring

const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);

//default values
const {menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

//mutating variables
let a = 111;
let b = 999;
const object = {a: 23, b: 7, c: 14};
({a, b} = object);
console.log(a, b);

//nested objects
const {fri: {open: o, close: c}} = openingHours;
console.log(o, c);
*/

/*
//spread operator
const arr = [7,8,9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1,2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, `Gnocci`];
console.log(restaurant.mainMenu);
console.log(newMenu);

// copy array 
const mainMenuCopy = [...restaurant.mainMenu]; // shallow copy of array
console.log(mainMenuCopy);

//join arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// iterables are arrays, string, maps, sets, but NOT objects
const str = `Jonas`;
const letters = [...str, ` `, `S.`];
console.log(letters);
console.log(...str);

restaurant.orderPasta = function (ing1, ing2, ing3) {
    console.log(ing1, ing2, ing3);
}

//const ingredients = [prompt(`Let's make past ingredient 1`),
// prompt(`and 2`),
// prompt(`and 3`)];
//
// console.log(ingredients);
//
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

//objects
const newRestaurant = {...restaurant, founder: `giuessppe`, foundedIn: 1998};
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'restauranta roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

*/

/*
//rest operator: to pack elements into an array
//rest pattern must always be the last in the assignment
//does not include any skipped elements
//can only be one rest pattern in any destructuring assignment
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);

//Objects
const {sat, ...weekdays} = restaurant.openingHours;
console.log(sat, weekdays);

//functions
const add = function (...numbers) { // rest
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) sum += numbers[i];
    console.log(numbers, sum);
}
add(2, 3);
add(5, 2, 7, 2);

const x = [23, 5, 7];
add(...x); //spread

restaurant.orderPizza = function(mainIngredient, ...otherIngredients) { //rest arguments of functions
  console.log(mainIngredient, otherIngredients);  
};
restaurant.orderPizza(`mushroom`, `onion`, `spinach`); // mushroom , [onion, spinach]
restaurant.orderPizza(`mushroom`); // mushroom, []
restaurant.orderPizza(); // undefined, []

 */

/*
//short circuiting && and ||

console.log(`---- OR -----`)
//use any data type, return any data type, short circuit evaluation
console.log(3 || `Jonas`);
console.log(`` || `Jonas`);
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || `` || `Hello`);

//const guests = restaurant.numGuests ? restaurant.numGuests : 10;
const guests = restaurant.numGuests || 10;
console.log(guests);

console.log(`---- AND -----`)
console.log(0 && `Jonas`);
console.log(7 && `Jonas`);

console.log(`Hello` && 23 && null && `Jonas`);

if(restaurant.orderPizza) {
    restaurant.orderPizza(`mushroom`, `spinach`);
}

restaurant.orderPizza && restaurant.orderPizza(`mushroom`, `spinach`); // call function if it exists

*/

/*
// nullish coalescing operator: ??

// || is using truthy values
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// ?? is using nullish values : only 2 nullish values exist: null and undefined
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);
*/

/*
//logical assignment operators
const rest1 = {
    name: `Capri`,
    numGuests: 20,
};

const rest2 = {
    name: `La Piazza`,
    owner: `Giovanni Rossi`,
};

//rest2.numGuests = rest2.numGuests || 10;
//rest1.numGuests = rest1.numGuests || 10;

//or assignment operator (assigns a value to a variable if this variable is currently falsy)
// --> all falsy values, thus '0' is also falsy

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;


//to solve this ... 
// we have the nullish assignment operator: will assign a value if the current value is nullish
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

//logical and assignment operator: to assign a value to a variable if it is currently truthy

//if owner is filled in, replace by <ANONYMOUS> string
//rest1.owner = rest1.owner && `<ANONYMOUS>`; , owner is set to undefined
//rest2.owner = rest2.owner && `<ANONYMOUS>`;

rest1.owner &&= '<ANONYMOUS>'; // owner is not set
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1, rest2);

*/


//coding assignment #1
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, `Thiago`, `Coutinho`, `Persic`];
console.log(players1Final);

const {team1, x: draw, team2} = game.odds;
//or also:
//const {odds: {team1, x: draw, team2}} = game;
console.log(team1, draw, team2);

const printGoals = function (...playerNames) {
    for (let i = 0; i < playerNames.length; i++) {
        console.log(playerNames[i]);
    }
    console.log(playerNames.length);
}
printGoals(`jef`, `jules`, `gerard`)
printGoals(...players1Final);
printGoals(...game.scored);

team1 < team2 && console.log(`team1 is more likely to win`);
team2 < team1 && console.log(`team2 is more likely to win`);


/*
//looping arrays - the for-of loop

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for(const item of menu) {
    console.log(item);
}

for(const item of menu.entries()) {
    console.log(`${item[0] +1}: ${item[1]}`);
}

//use direct array destructuring to get first and second element out of each entry
for(const [index, item] of menu.entries()) {
    console.log(`${index +1}: ${item}`);
}

console.log([...menu.entries()]);
*/

/*
//enhanced object literals
const weekdays = [`mon`, `tue`, `wed`, `thu`, `fri`, `sat`, `sun`];

const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 24
    },
    [`fri ${2+2}`]: {
        open: 12,
        close: 23,
    },
}

const restaurant2 = {
    name: `test`,
    openingHours,
    order(starterIndex, mainIndex) {
        console.log(`order`);
    }
}

console.log(restaurant2);

*/

/*
//optional chaining ?.
console.log(restaurant.openingHours.mon?.open); //only if mon property exists, then open will be read, if mon does not exist -> then undefined is returned

console.log(restaurant.openingHours2?.mon?.open);

const days = [`mon`, `tue`, `wed`, `thu`, `fri`, `sat`, `sun`];

for(const day of days) {
    console.log(`${day} - open at ${restaurant.openingHours[day]?.open??`closed`}`);
}

//methods
console.log(restaurant.order?.(0, 1) ?? `method does not exist`);

//arrays
const users = [
    {name: `jonas`, email: `ddd`}
]
console.log(users[0]?.name??`empty`);
*/

/*
//looping objects: object keys, values, and entries

const properties = Object.keys(restaurant.openingHours);
console.log(properties);

for(const day of properties) {
    console.log(day);
}

const values = Object.values(restaurant.openingHours);
console.log(values);

const entries = Object.entries(restaurant.openingHours);
console.log(entries);

for (const [day, {open, close}] of entries) {
    console.log(`On ${day}, we open at ${open} and close at ${close}`);
}
*/

//coding challenge #2

//1.
for (const [number, name] of game.scored.entries()) {
    console.log(`Goal ${number + 1}: ${name}`);
}

//2.
let averageOdds = 0;
for (const odd of Object.values(game.odds)) {
    averageOdds += odd;
}
averageOdds = averageOdds / Object.values(game.odds).length;
console.log(averageOdds);

//3.
for (const [oddName, oddScore] of Object.entries(game.odds)) {
    console.log(`Odd of ${game[oddName] ?? 'draw'} : ${oddScore}`); // still need to add victory, with a ternairy operator
}

//4. 
const scorers = {};
for (const scorer of Object.values(game.scored)) {
    scorers[scorer] = (scorers[scorer] ?? 0) + 1;
    // scorers[player] ? scorers[player]++ : (scorers[player] = 1); // alternatief
}
console.log(scorers);

/*
// sets
const ordersSet = new Set([`Pasta`, `Pizza`, `Pasta`, `Risotto`, `Pasta`, `Pizza`]);
console.log(ordersSet);

console.log(new Set(`Jonas`));
console.log(new Set());

console.log(ordersSet.size);
console.log(ordersSet.has('Pasta'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet);

ordersSet.delete(`Risotto`);
console.log(ordersSet);

//ordersSet.clear();
console.log(ordersSet);

for(const order of ordersSet) {
    console.log(order);
}

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log({} === {});

*/

/*
//maps
const rest = new Map()
    .set(`name`, `Classico Italiano`)
    .set(1, `Firenze`)
    .set(2, `Lisbon`);

console.log(rest);
console.log(rest.get(1)); // key equality is based on : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#same-value-zero_equality

console.log(rest.has(`name`));
rest.delete(2);
console.log(rest);

console.log(rest.size);

rest.set(document.querySelector(`h1`), `heading`);

rest.set([1, 2], 'Test');
console.log(rest);

console.log(rest.get([1, 2])); // undefined

const arr = [3, 4];
rest.set(arr, 'Test 2');
console.log(rest);

console.log(rest.get(arr)); // `Test 2` // now refers to the same place in memory

const question = new Map([
    [`question`, `what is the best prog language?`],
    [1, `C`],
    [2, `Java`],
    [3, `JavaScript`],
    ['correct', 3],
    [true, `correct !`],
    [false, `try again`],
]);
console.log(question);

//convert object to map
console.log(Object.entries(restaurant.openingHours));
const hoursMap = new Map(Object.entries(restaurant.openingHours));
console.log(hoursMap);

console.log(`question: ${question.get('question')}`);
for(const [key, value] of question) {
    if (typeof key === `number`) {
        console.log(`answer ${key}: ${value}`);
    }    
}
const answer = Number(prompt('Your answer'));

console.log(`Your answer ${answer} resulted in : ${question.get(question.get('correct') === answer)}`)

console.log([...question]);
console.log([...question.keys()]);
console.log([...question.entries()]);
console.log([...question.values()]);

*/


//coding challenge #3

const gameEvents = new Map([
    [17, '?? GOAL'],
    [36, '? Substitution'],
    [47, '?? GOAL'],
    [61, '? Substitution'],
    [64, '? Yellow card'],
    [69, '? Red card'],
    [70, '? Substitution'],
    [72, '? Substitution'],
    [76, '?? GOAL'],
    [80, '?? GOAL'],
    [92, '? Yellow card'],
]);

//1.
const events = [...new Set(gameEvents.values())];
console.log(events);

//2.
gameEvents.delete(64);
console.log(gameEvents);

//3.
console.log(`An event occured on average every ${Math.trunc(90 / gameEvents.size)} minutes.`)

//4.
for (const [minute, event] of gameEvents) {
    console.log(`[${minute <= 45 ? 'FIRST' : 'SECOND'} HALF] ${minute}: ${event}.`)
}

/*
//strings

const airline = `TAP Air Portugal`;
let plane = `A320`;

console.log(plane[0]);
console.log(airline.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));
console.log(airline.indexOf('portugal'));

console.log(airline.slice(4)); // 0 based
console.log(airline.slice(4, 7)); // end value not included in the string ; length is end - beginning

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
    const s = seat.slice(-1);
    if (s === 'B' || s === 'E') {
        console.log(`middle seat`);
    } else {
        console.log(`window seat`);
    }
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

//boxing: string primitive automatically converts to string object, so we can call methods on
console.log(`Jonas`);
console.log(typeof `Jonas`);
console.log(new String(`Jonas`));
console.log(typeof new String(`Jonas`));
console.log(`jonas`.slice(1));
console.log(typeof `jonas`.slice(1)); // every method called on a prmivite string, is autoomatically back converted to a string from the object (unboxing)

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = `jOnAS`;
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//comparing email
const email = `hello@jonas.io`;
const loginEmail = `    Hello@Jonas.Io  \n`;

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(normalizedEmail === email);

const priceGB = `288,97pounds`;
const priceUS = priceGB.replaceAll(',', '.').replaceAll('pounds', 'dollars');
console.log(priceUS);

const announcement = `All passengers come to boarding door 23. Boarding door 23.`;
console.log(announcement.replace(/door/g, 'gate'));

plane = `Airbus A320neo`;
console.log(plane.includes(`A320`));
console.log(plane.startsWith(`A3`));

console.log(`a+very+nice+string`.split(`+`));

const [firstName, lastName] = `Jonas Schmedtmann`.split(' ');
console.log(firstName, lastName);

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function(name) {
    const names = name.split(` `);
    const result = [];
    for (const n of names) {
        result.push(n[0].toUpperCase() + n.slice(1));
    }
    return result.join(' ');
};

console.log(capitalizeName(`jessica ann smith davis`));
console.log(capitalizeName(`jonas smedtmann`));

const maskCreditCard = function(number) {
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
}

console.log(maskCreditCard(1214123115312315));
console.log(maskCreditCard(`1214123315312315`));

*/

//coding challenge 4

const input = [
    `underscore_case`,
    `first_name`,
    `some_variable`,
    `calculate_age`,
    `delayed_departure`,
    `abeam_holding_point`
]

console.log(input);

const toCamelCase = function (aString) {
    const result =
        aString
            .split('_')
            .map(str => str[0].toUpperCase() + str.slice(1))
            .join('');
    return result[0].toLowerCase() + result.slice(1);
}

console.log(toCamelCase('underscore_case'));
console.log(input.map(toCamelCase));

for(const [index, str] of input.map(toCamelCase).entries()) {
    console.log(`${str.padEnd(30, '.')}${'X'.repeat(index + 1)}`);
}

const getCode = str => str.slice(0, 3).toUpperCase(); 
for(const flight of flights.split(`+`)) {
    const [type, from, to, time] = flight.split(`;`);
    console.log(`${type.startsWith('_Delayed') ? 'D ': ''}${type.replaceAll('_', ' ').trim()} from ${getCode(from)} to ${getCode(to)} at ${time.replace(':', 'h')}`.padStart(50, '.'));
}








