'use strict'; //has to be the very first statement in the script

/*let hasDriversLicense = false;
const passTest = true;

if(passTest) {
    hasDriverLicense = true; //this sets a new variable to true (note the missing s) -> but when using strict mode -> we get an error ... (Uncaught ReferenceError: hasDriverLicense is not defined)
}

if(hasDriversLicense) {
    console.log('i can drive');
}

const interface = 'Audio'; //reserved words for 'later' (Uncaught SyntaxError: Unexpected strict mode reserved word (at script.js:14:7))
const private = 343;

 */
/*
function logger() {
    console.log('my name is jonas');
}

const result = logger();
console.log(result);

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

console.log(fruitProcessor(2, 4));

*/
/*
//functions are values in javascript

const age1 = calcAge1(1980); //argument is the actual value passed for each parameter
console.log(age1);

//function declaration, can be called before defining: process: hoisting
function calcAge1(birthYear) { //parameter is the placeholder
    return 2037 - birthYear;
}


//function expression -> expression creates a value, and we store that value in calcAge2
const calcAge2 = function (birthYear) { // anonymous function
    return 2037 - birthYear;
};

const age2 = calcAge2(1980);
console.log(age2);

*/
/*
//arrow functions
const calcAge2 = function (birthYear) { // anonymous function
    return 2037 - birthYear;
};

//es6 syntax
const calcAge3 = birthYear => 2037 - birthYear; // arrow function
//return is implicitely

console.log(calcAge3(1980));

const calcAge4 = birthYear => {
    return 2037 - birthYear;
} // arrow function
//return is implicitely

console.log(calcAge4(1980));

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirementAge = 65 - age;
    return `${firstName} retires in ${retirementAge} years`;    
};

console.log(yearsUntilRetirement(1980, 'Bob'));

//arrow functions do not get a this keyword ... 

*/
/*
const cutFruitPieces = function(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    
    return `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges.`;
}

console.log(fruitProcessor(2, 3));

*/
/*
//introduction to arrays
const friends = ['Micheal', 'Steven', 'Peter']; //literal syntax
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020); // using function
console.log(years);

console.log(friends[0]); // arrays are indexes are zero based
console.log(friends.length); // length = property
console.log(friends[friends.length - 1]); // get last element

friends[2] = 'Jay';
console.log(friends);

friends[3] = 'Julius';
console.log(friends);

friends[55] = 'Julius';
console.log(friends);

const jonas = ['jonas', 10998, true, friends];
console.log(jonas);

*/

/*
//basic array methods
const friends = ['Micheal', 'Steven', 'Peter']; //literal syntax
const newLength = friends.push('Jay');
console.log(newLength);
console.log(friends);

friends.unshift('John');
console.log(friends);

const popped = friends.pop();
console.log(popped);
console.log(friends);

const shifted = friends.shift();
console.log(shifted);
console.log(friends);

console.log(friends.indexOf('Steven'));
friends.push('Steven');
console.log(friends);
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));
console.log(friends.indexOf('Bob'));

console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
*/
/*
// introduction to objects

const jonasArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven']  
];
console.log(jonasArray);

//object = > key value pairs; each of the keys is also called a property

const jonas = { // object literal syntax
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
}
console.log(jonas);

console.log(jonas.lastName); // dot notation: final property name, not a computed property name
console.log(jonas['firstName']); // we can put any expression in the square brackets notation , we can compute it (it is an expression)

const nameKey = 'Name';
console.log(jonas[`first${nameKey}`]);
console.log(jonas[`last${nameKey}`]);

const interestedIn = prompt('what would you want to know');
console.log(jonas.interestedIn); // undefined ... : jonas does not have a property named interestedIn

if(jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log(`Cannot show ${interestedIn}`);
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonas';
console.log(jonas);
*/
/*
//add functions to objects
const jonas = { // object literal syntax
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1980,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    
    // calcAge: function(birthYear) {
    //     return 2037 - birthYear;
    // },
    // calcAge: function() {
    //     return 2037 - jonas.birthYear; //'this' is equal to the object calling the method
    // }
    // calcAge: function() {
    //     return 2037 - this.birthYear; //'this' is equal to the object calling the method
    // }
    calcAge: function() {
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    describe: function() {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
    }
}

//console.log(jonas.calcAge(jonas.birthYear));
//console.log(jonas['calcAge'](jonas.birthYear));

console.log(jonas.calcAge);
console.log(jonas.calcAge());
// jonas.birthYear = 1991;
// jonas.calcAge = function() {
//     return 2090 - this.birthYear;
// }
// console.log(jonas.calcAge());

console.log(jonas);
//console.log(jonas['calcAge']);
//console.log(jonas['calcAge']());

console.log(jonas.describe());

//arrays are also objects
*/

/*// loops
console.log(`Lifting weights repetition 1`);
console.log(`Lifting weights repetition 2`);
// ...

for(let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}
*/

/*
//use loops in arrays

const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];
const types = [];
const reversed = [];

for(let i = 0; i < jonasArray.length; i++) {
    
    console.log(jonasArray[i], typeof jonasArray[i]);
    types.push(typeof jonasArray[i]);
    reversed.unshift(jonasArray[i]);
}

console.log(types);
console.log(reversed);

jonasArray.reverse()

*/

let dice = {
    roll: function() {
        this.numbers = Math.trunc(Math.random() * 6) + 1;
        return this.numbers;
    }
};

while (dice.roll() !== 6) {
    console.log(dice.numbers);
}




