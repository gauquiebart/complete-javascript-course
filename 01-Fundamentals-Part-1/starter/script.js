/*let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas'); //literal value
console.log(23); //literal value

let firstName = "Matilda"; //declaring a variable, using camelCase

console.log(firstName); 
console.log(firstName);
console.log(firstName);

let jonas__matilda = 'JM';
let $function = 207;
let name = 'Jonas';
*/
/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Jonas");
console.log(typeof jonas);

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year; // empty variable
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);
*/
/*
let age = 30;
age = 31; //reassignment of a variable, mutation of variable

const yearOfBirth = 1991; //const signifies a immutable variable
//yearOfBirth = 1990;

//const job; // cannot create const without initial value

// use const as a default; and change to let if needed


var job = 'programmer';
job = 'teacjer';

lastName = 'schmedtmann';
console.log(lastName);
*/
/*
//math operators
const now = 2037;
const ageJonas = now - 1998;
const ageSarah = now - 1990;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = "Jonas";
const lastName = "Schmedtmann";

console.log(firstName + " " + lastName); // can also do using template strings

//asignment operators
let x =  10 + 5; // = is an operator in javascript
x += 10;
x *= 4;
x++;
console.log(x);

//comparison operators
console.log (ageJonas > ageSarah);
console.log(now - 1991 > now - 1018);

let x2, y;
x2 = y = 25- 10 - 5;
console.log(x2, y);*/
/*
//template literals
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

//type coercion -> converts the number to a string
const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job +  '!';
console.log(jonas);

//use back ticks for template literals
const jonasTemplateLiteral = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasTemplateLiteral);

// you can use back ticks for any regular string (then it just always works)
console.log(`just a regular string`);

//multiline string 'old way'
console.log('String with \n\
multiple\n\
lines');

//multiline string using back ticks (just enter), use template literal
console.log(`String
multiple
lines`);
*/
/*
const age = 15;
if(age >= 18) {
    console.log(`Sarah can start driving licence `);
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah can start driving licence NOT , still needs to wait ${yearsLeft} years`);
}

const birthYear = 1991;
let century;
if(birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

*/
/*
//type conversion vs type coercion

//type conversion ==> manually convert

const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas')); //NaN => Not a Number invalid Number
console.log(typeof NaN)

console.log(String(2002), 2002);

//type coercion ==> automatically converted

console.log('I am ' + 23 + ' years old'); // + triggers a coercion to strings
console.log('I am ' + '23' + ' years old');
console.log('I am ' + String(23) + ' years old');

console.log('23' - '10' - 3); // strings are converted to numbers for -
console.log('23' + '10' + 3); // numbers are converted to strings for +
console.log('23' * 3); // strings are converted to numbers for *
console.log('23' / 3); // strings are converted to numbers /

let n = '1' + 1;
n = n - 1;

console.log(n);

console.log(2+3+4+'5'); //2+3 = 5 + 4 = 9 + '5' = '95'

console.log('10'-'4'-'3'-2+'5'); // '10'-'4' = 6 - '3' = 3 - '2' = 1 + '5' = '15'

*/
/*
//truthy, falsy

//5 falsy values : 0, '', undefined, null, Nan => will convert to false when we try to convert them to a boolean; everything else are truthy values

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;

if(money) {
    console.log("don't spend it all");
} else {
    console.log('You should get a job');
}

let height = 0;
if(height) {
    console.log('height is defined');
} else {
    console.log('height is undefined');
}

*/
/*
//equality operators

const age = 18;
if(age === 18) { // strict equality operator, does not perform type coercion
    console.log('you just became an adult');
}

if(age == '18') { //loose equality operator, does type coercion => do try to avoid this equality operator
    console.log('you just became an adult');
}

const favourite = Number(prompt(`what's your favourite number?`));

console.log(favourite);
console.log(typeof favourite);

if(favourite === 23) {
    console.log('23 is an amazing number');
} else {
    console.log('not 23');
}

if (favourite !== 23) {
    console.log(`not 23 again`);
}
*/
/*
const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);
*/
/*
//switch statement
const day = 'monday';
switch (day) {
    case 'monday': //using strict equality ...
        console.log('plan my course structure');
        console.log('multiple lines');
        break;
    case 'tuesday':
        console.log('prepare');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('write code examples');
        break;
    default: 
        console.log('other day');
}
*/
/*
//statements and expressions

//expression: piece of code that produces a value
3 + 4;
19987;
true && false

//statements: bigger piece of code that is executed, performing actions, but not produces a value by itself
if(23 > 10) {
    const str = '23 is bigger';
}
*/
/*
//conditional / ternary operator

const age = 23;
age >= 18 ? console.log('i like to drink wine') : console.log('i like to drink water');

const str = age >= 18 ? 'i like to drink wine': 'i like to drink water';
console.log(str); // ternary operator -> an operator produces an expression -> so ternary operator produces an expression
*/



