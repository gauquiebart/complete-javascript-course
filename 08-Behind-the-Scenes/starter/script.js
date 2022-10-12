'use strict';

/*
function calcAge(birthYear) {
    function printAge() {

        let out = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(out);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            const firstName = `Steven`;
            const str = `Oh, and you're a millenial ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }

            out = `NEW OUTPUT`;
        }

        console.log(millenial);
        //console.log(str);
        //add(2, 3); // add is not defined
        console.log(out);
    }

    const age = 2037 - birthYear;
    printAge();
    return age;
}

const firstName = `Jonas`;
calcAge(1991);

*/
/*
//hoisting in JavaScript

console.log(me); //undefined
//console.log(job); // script.js:42  Uncaught ReferenceError: Cannot access 'job' before initialization
//console.log(year);  // script.js:42  Uncaught ReferenceError: Cannot access 'year' before initialization


var me = `Jonas`;
let job = `Teacher`;
const year = 1991;

console.log(addDecl(2, 3)); // 5 : function declaration: can use before declaration.

//console.log(addExpr(2, 4)); //Uncaught ReferenceError: Cannot access 'addExpr' before initializationat script.js:51:13 (with const)
//console.log(addArrow(2, 4)); //Uncaught ReferenceError: Cannot access 'addArrow' before initializationat script.js:51:13 (with const)

//console.log(addExpr(2, 4)); //addExpr is not a function

function addDecl(a, b) {
    return a + b;
}

// const addExpr = function (a, b) {
//     return a + b;
// }
var addExpr = function (a, b) {
    return a + b;
}

const addArrow = (a, b) => a + b;


//hoisting example bug
if (!numProducts) { // numproducts is still undefined at this stage
    console.log(numProducts);
    deleteShoppingCart();
}

var numProducts = 10;

function deleteShoppingCart() {
    console.log('all products deleted');
}


var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

*/

/*
//this keyword
console.log(this); // window

const calcAge = function(birthYear) {
    console.log(2037 - birthYear);
    console.log(this); // undefined
}
calcAge(1991);

const calcAgeArrow = (birthYear) => {
    console.log(2037 - birthYear);
    console.log(this); // window (this keyword in the parent scope in this function)
}
calcAgeArrow(1991);


const calcAgeAgain = function(birthYear) {
    console.log(2037 - birthYear);
    console.log(this); // undefined

    const calcAgeArrow = (birthYear) => {
        console.log(2037 - birthYear);
        console.log(this); // undefined (this keyword in the parent scope in this function)
    }
    
    calcAgeArrow(birthYear);

}
calcAgeAgain(1991);



const jonas = {
    year: 1991,
    calcAge: function () {
        console.log(this); // jonas object
        console.log(2037 - this.year);
    }
}

jonas.calcAge();


const matilda = {
    year: 2017,
};

matilda.calcAge = jonas.calcAge; //method borrowing

// this keyword always points to the object calling the method
matilda.calcAge(); // points to matilda
jonas.calcAge(); // points to jonas

const f = jonas.calcAge;

f(); // this keyword is undefined : so we get : Uncaught TypeError: Cannot read properties of undefined (reading 'year')


*/

/*
//regular functions vs arrow functions

//var firstName = `Matilda`;

const jonas = {
    firstName: `jonas`,
    year: 1991,
    calcAge: function () {
        console.log(this); // this points to jonas
        console.log(2037 - this.year);

        const isMillenial = function () {
            console.log(this); // this is undefined
            console.log(this.year >= 1981 && this.year <= 1996); // so we get : Uncaught TypeError: Cannot read properties of undefined (reading 'year')
        }
        //isMillenial(); // regular function call has the this keyword to undefined

        //solution 1
        const self = this; // self or that; pre es6 solution
        const isMillenial2 = function () {
            console.log(self);
            console.log(self.year >= 1981 && self.year <= 1996);
        }
        isMillenial2();

        //solution 2 // es6 solution: use an arrow function (since arrow function has no this, but uses the this keyword of the parent scope.
        const isMillenial3 = () => {

            (() => {
                (() => {
                        console.log(this);
                        console.log(this.year >= 1981 && this.year <= 1996);
                    }
                )();
            })();
        }
        isMillenial3();
    },
    greet: () => {
        console.log(this); // points to window
        console.log(`hey ${this.firstName}`)// results undefined (a property on an object that does not exist -> undefined)
        //so never ever use an arrow function as a method (a function on an object)
    }
}

jonas.calcAge();
//jonas.greet();
//console.log(this.firstName); // returns undefined


//arguments keyword
//only available in regular functions

const addExpr = function (a, b) {
    console.log(arguments);
    return a + b;
}
addExpr(2, 5);
addExpr(2, 5, 6, 7);
const addArrow = (a, b) => {
    console.log(arguments);
    return a + b;
}
addArrow(2, 5, 8); //script.js:216  Uncaught ReferenceError: arguments is not defined

*/

/*
//primitive types vs objects

let age = 30;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);

const me = {
    name: `jonas`,
    age: 30,
};

const friend = me;
friend.age = 27;

console.log(friend);
console.log(me);
*/

/*
let lastName = `Williams`;
let oldLastName = lastName;
lastName = `Davis`;
console.log(lastName, oldLastName);

const jessica = {
    firstName: `Jessica`,
    lastName: `Williams`
};

const marriedJessica = jessica;
marriedJessica.lastName = `Davis`;
console.log(jessica, marriedJessica);

//marriedJessica = {}; //script.js:259 Uncaught TypeError: Assignment to constant variable. (because of const)


//copying objects
const jessica2 = {
    firstName: `Jessica`,
    lastName: {
        nested: `Williams`}
};

const jessicaCopy = Object.assign({}, jessica2); //however only 1 level deep ... => shallow copy, not a deep clone
jessicaCopy.lastName.nested = `Davis`;
console.log(jessica2, jessicaCopy);

*/
 