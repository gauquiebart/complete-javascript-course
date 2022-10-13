'use strict';

/*
const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 1.99 * numPassengers) { //es6 default values
    //es5
    //numPassengers = numPassengers ?? 1;
    //price = price ?? 1.99;

    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
}

createBooking('LH1234');
createBooking('LH1234', 33);
createBooking('LH1234', 2, 800);
createBooking('LH1234', undefined, 800);
 */

/*
const flight = 'LH234';
const jonas = {
    name: 'jonas',
    passport: 22313413131
}

const checkIn = function(flightNum, passenger) {
    flightNum = `LH999`;
    passenger.name = `Mr. ` + passenger.name;
    
    if(passenger.passport ===22313413131) {
        console.log(`check in`)
    } else {
        console.log(`wrong passport`);
    }
}

checkIn(flight, jonas);

console.log(flight);
console.log(jonas);


const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 23817934701283);
}

newPassport(jonas);
checkIn(flight, jonas);

*/

/*
//first class functions + higher order functions
/

const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ')
    return [first.toUpperCase(), ...others].join(' ');
}

//higher order function
const transformer = function (str, fn) {
    return fn(str);
}

console.log(transformer(`javascript is the best`, upperFirstWord));
console.log(transformer(`javascript is the best`, oneWord));

const greet = function (greeting) {
    let number = 1;
    return function (name) {
        console.log(`${greeting} ${name} ${number++}`);
    }
}


const greeterHey = greet(`Hey`);
greeterHey(`Jonas`);
greeterHey(`Steven`);

const greeterJow = greet(`Jow`);
greeterJow(`Jonas`);
greeterJow(`Julius`);
greeterJow(`freddy`);
greeterJow(`oiuo`);

const greetArrow = greeting => name => console.log(`${greeting} ${name}`);
greetArrow('Hello')('fr3e');
*/

/*
//call and apply methods
const lufthansa = {
    airline: 'lufthansa',
    iataCode: `LH`,
    bookings: [],
    book(flightNum, name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`);
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
    }
}

lufthansa.book(239, `Jonas`);
lufthansa.book(635, `Steven`);
console.log(lufthansa);

const eurowings = {
    airline: `èurowings`,
    iataCode: `EW`,
    bookings: [],
    
}

const book = lufthansa.book;
//book(23, `Sarah`); //does not work
book.call(eurowings, 23, `Sarah`);
console.log(eurowings);

book.call(lufthansa, 239, 'cooper');
console.log(lufthansa);

book.apply(lufthansa, [239, `jules`]);
console.log(lufthansa);

book.call(lufthansa, ...[239, `key`]);
console.log(lufthansa);

//bind method

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);

bookEW(23, `Stevens`);
console.log(eurowings);

const bookEW23 = book.bind(eurowings, 23); // can add arguments as well in a bind => partial application
bookEW23(`Patti`);
console.log(eurowings);


//with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function() {
    this.planes++;
    console.log(this.planes);
}

//document.querySelector(`.buy`).addEventListener(`click`, lufthansa.buyPlane); // this keyword points to the element the handlers is attached to ... so we get NaN because planes does not exist on the buy button
document.querySelector(`.buy`).addEventListener(`click`, lufthansa.buyPlane.bind(lufthansa)); // so we need to bind the this keyword to lufthansa
document.querySelector(`.buy`).addEventListener(`click`, function() {lufthansa.buyPlane()}); // or create an inner function, that then calls buyPlane using the object -> which makes the this keyword point to the object instead of the button


//partial application
const addTax = (rate, value) => value + value * rate;

console.log(addTax(.1, 200));

const addVAT = addTax.bind(null, .23);
console.log(addVAT(100));

const addVAT2 = function(value) {
    return addTax(.23, value);
}
console.log(addVAT2(100));
console.log(addVAT2);

const addTaxRate = function(rate) {
    return function(value) {
        return value + value * rate;
    }
}
console.log(addTaxRate(.23)(100));
console.log(addTaxRate);
console.log(addTaxRate(.23));

*/

/*
//coding challenge
const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    answers: new Array(4).fill(0),
    registerAnswer() {
        const answerIndex = Number(prompt('fav language?'));
        if (answerIndex >= 0 && answerIndex <= this.options.length) {
            this.answers[answerIndex]++;
        }
        console.log(this.answers);
    }
}

document.querySelector(`.poll`).addEventListener(`click`, function () {
    poll.registerAnswer()
});
*/

/*
//Immediately invoked function expressions IIFE
const runOnceFail = function() {
    console.log(`this will never run again`);
}
runOnceFail();

(function() {
    console.log('this will never run again');
})();

(() => console.log('this will never run again'))();
*/


//closures

const secureBooking = function () {
    let passengerCount = 0;

    return function () {
        passengerCount++; //any function always has access to variable environment of the execution context in which the function was created
        console.log(`${passengerCount} passengers`);
    }
}

const booker = secureBooking();

booker();
booker();
booker();

//closure has priority over scope chain to find variables
//closure = the closed-over variable environment of the execution context in which the function was created.

console.dir(booker);

let f;

const g = function () {
    const a = 23;
    f = function () {
        console.log(a * 2);
    }
}

const h = function () {
    const b = 777;
    f = function () {
        console.log(b * 2);
    }
}
g();
f();
console.dir(f);

h();
f();
console.dir(f);


const boardPassengers = function (n, wait) {
    const perGroup = n / 3;

    setTimeout(function () {
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000);

    console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000; //closure has priority over scope chain

boardPassengers(180, 3);


//coding challenge #2
(function () {
    const header = document.querySelector(`h1`);
    header.style.color = `red`;

    document.querySelector(`body`).addEventListener(`click`, function () {
        header.style.color = 'blue';
    });
})();






