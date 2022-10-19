'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*
let arr = ['a', 'b', 'c', 'd', 'e'];

//slice
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(0));
console.log(arr.slice(1, -1));

console.log(arr.slice());
console.log(...arr);

//splice : mutates original array
//console.log(arr.splice(2)); // splice deleted the elements from array
console.log(arr.splice(-1)); // remove last element
console.log(arr);

//reverse
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); // mutates array
console.log(arr2);

//concat
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

//join
console.log(letters.join(' - '));

 */

/*

const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

//get last element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

*/

/*
//foreach

for(const [i, movement] of movements.entries()) {
    if(movement > 0) {
        console.log(`${i} You deposited ${movement}`);
    } else {
        console.log(`${i} You withdrew ${Math.abs(movement)}`);
    }
}

console.log(`for each`);
movements.forEach(function (movement, index) {
    if(movement > 0) {
        console.log(`${index} You deposited ${movement}`);
    } else {
        console.log(`${index} You withdrew ${Math.abs(movement)}`);
    }
});

currencies.forEach(function (value, key, map){
    console.log(`${key} - ${value}`);
});

const currenciesUnique = new Set(['USD', `Euro`, `USD`]);
currenciesUnique.forEach(function(value, key, set) {
    console.log(`${value} - ${set}`);
});


*/


//coding challenge #1
const checkDogs = function (dogsJulia, dogsKate) {
    const onlyDogsJulia = dogsJulia.slice(1, -2);
    const allDogs = [...onlyDogsJulia, ...dogsKate];
    allDogs.forEach(function (value, index) {
        const msg = value > 3 ? `an adult and is ${value} years old` : `still a puppy`;
        console.log(`Dog ${index + 1} is ${msg}`);
    });
}
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// coding challenge #2 + #3

const calcAverageHumanAge = dogsAges => {
    return dogsAges.map(dogAge => dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4)
        .filter(humanAge => humanAge >= 18)
        .reduce((acc, value, i, arr) => acc + value / arr.length, 0);
}
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));


/*
//map, filter, reduce

const eurToUSD = 1.1;
const movementsUSD = movements.map(function(mov) {
    return mov * eurToUSD;
});
const movementsUSD2 = movements.map(mov => mov * eurToUSD);
console.log(movements)
console.log(movementsUSD);
console.log(movementsUSD2);

const deposit = value => value > 0;
const withdrawal = value => value < 0;
const deposits = movements.filter(deposit);
const withdrawals = movements.filter(withdrawal);

console.log(movements);
console.log(deposits);

const balance = movements.reduce(function(acc, cur, i, arr){
   return acc + cur; 
}, 0);
console.log(balance);

console.log(movements.reduce((acc, cur) => Math.max(acc, cur), movements[0]));

*/

/*
const eurToUsd = 1.1;

const totalDepositsInUSD =
    movements
        .filter(mov => mov > 0)
        .map(deposit => deposit * eurToUsd)
        .reduce((acc, deposit) => acc + deposit, 0);
console.log(totalDepositsInUSD);
*/

/*
//find method

console.log(movements);
var firstRedrawal = movements.find(mov => mov < 0);
console.log(firstRedrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === `Jessica Davis`);
console.log(account);
*/

/*
//some and every

console.log(movements);
console.log(movements.includes(-130)); // test for equality

//tests for a condition
//some
console.log(movements.some(mov => mov === -130));
const anyDeposits = movements.some(mov => mov > 1500);
console.log(anyDeposits);

//every
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

*/

/*
//flat, flatMap
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[1, [2, 3]], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat()); // only 1 level deep by default
console.log(arrDeep.flat(2)); // can provide any level

const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);
const allMovements = accountMovements.flat();
console.log(allMovements);
const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);


const overallBalance2 = accounts
    .map(acc => acc.movements)
    .flat()
    .reduce((acc, mov) => mov + acc, 0);
console.log(overallBalance2);

const overallBalance3 = accounts
    .flatMap(acc => acc.movements)
    .reduce((acc, mov) => mov + acc, 0);
console.log(overallBalance3);

*/

/*
// sorting arrays
const owners = [`Jonas`, `Zach`, `Adam`, `Martha`];
console.log(owners.sort()); // mutates array !
console.log(owners);

console.log(movements);
//console.log(movements.sort()); // sorting is based on strings -> converts everything to strings, and then does the sorting for these strings

console.log(movements.sort((a, b) => a - b));
*/


//fill method
const x = new Array(7);
console.log(x); // empty array with 7 elements
console.log(x.map(() => 5)); // does not do anything

x.fill(1, 2, 5);
console.log(x);

const y = Array.from({length: 7},() => 1); // calling the from method on the Array function object
console.log(y);

const z = Array.from({length: 7}, (_, i) => i + 1); // _ is a throw away parameter
console.log(z);






