'use strict';

/*//constructor functions, new operator

const Person = function (firstName, birthYear) { //constructor functions start with a capital letter
    //instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // never do this ... 
    // this.calcAge = function() {
    //   console.log(2037 - this.birthYear);
    // };
};

const jonas = new Person(`Jonas`, 1991);
console.log(jonas);

//new operator 
//1. new empty object () is created
//2. function is called, this = ()
//3. () linked to prototype
//4. function automatically returns empty object from the beginning

const matilda = new Person('matilda', 2000);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person);
console.log(typeof jonas);

//prototypes

console.log(Person.prototype);
console.log(typeof Person.prototype);

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear); // this keyword is set to the object calling the method
}

console.log(Person.prototype);

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));


Person.prototype.species = `Homo Sapiens`;
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty(`firstName`));
console.log(jonas.hasOwnProperty(`species`));


console.log(jonas.__proto__); //Person.prototype
console.log(jonas.__proto__.__proto__); //Object.prototype
console.log(jonas.__proto__.__proto__.__proto__); // null

console.dir(Person.prototype.constructor);

Person.hey = function () {
    console.log(`hey there !`);
    console.log(this); // this keyword is the entire constructor function (Person)
}

Person.hey();
//person.hey();

const arr = [2, 3, 2]; // same as: new Array
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);
console.log(arr.__proto__.__proto__ === Object.prototype);

Array.prototype.unique = function () {
    return [...new Set(this)];
}

console.log(arr.unique());

const h1 = document.querySelector(`h1`);

console.dir(x => x + 1);

*/


/*
//es6 classes
//modern syntax for prototyperial inheritance
//classes are special type of functions

//class expression
// const PersonCl = class {
// }

//class declaration
class PersonCl {

    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    calcAge() { // will be added on prototype property of PersonCl class
        console.log(2037 - this.birthYear);
    }

    get age() {
        return 2037 - this.birthYear;
    }

    set fullName(name) {
        if (name.includes(` `)) {
            this._fullName = name; // to prevent infinite loop (the '_' is a javascript convention)
        } else {
            console.log('no full name ...');
        }
    }

    get fullName() {
        return this._fullName;
    }

    static hey() {
        console.log(`hellow there`);
    }

}

const jessica = new PersonCl(`Jessica`, 1996);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);

PersonCl.prototype.greet = function () {
    console.log(`Hey ${this.fullName}`);
}
jessica.greet();
console.log(jessica.age);

jessica.fullName = `abc asdf`;

const walter = new PersonCl(`Walter`, 1965);
console.log(walter);

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens (classes are a special kind of functions) 
// 3. Classes are executed in script mode


PersonCl.hey();

//setters and getters

const account = {
    owner: `jonas`,
    movements: [125, 121, 121, 121],

    get latest() {
        return this.movements.slice(-1).pop();
    },

    set latest(mov) {
        this.movements.push(mov);
    }
}

console.log(account.latest);
account.latest = 22;
console.log(account.movements);


//static methods

//Objects.create

const PersonProto = {
    calcAge: function () {
        console.log(2037 - this.birthYear);
    },
    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
};

const steven = Object.create(PersonProto);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__);
console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init(`Sarah`, 1995);
console.log(sarah);
sarah.calcAge();
*/

/*
//inheritance between classes
//with constructor functions

const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
    return 2037 - this.birthYear;
}

const Student = function (firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
}

//linking prototypes
Student.prototype = Object.create(Person.prototype); // will return an empty object, so after that line, we can add our own methods

//Student.prototype = Person.prototype; // does not work ...

Student.prototype.constructor = Student;

Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and i study ${this.course}`);
}

const mike = new Student(`Mike`, 2020, `Computer science`);
console.log(mike);
mike.introduce();
console.log(mike.calcAge());

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.dir(Student.prototype.constructor);
console.log(mike instanceof Student);
console.log(mike instanceof Person);

//class declaration
class PersonCl {

    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    calcAge() { // will be added on prototype property of PersonCl class
        return 2037 - this.birthYear;
    }

}

class StudentCl extends PersonCl {

    constructor(fullName, birthYear, course) {
        super(fullName, birthYear);
        this.course = course;
    }

    introduce() {
        console.log(`My name is ${this.fullName} and i study ${this.course}`);
    }

    calcAge() { 
        return 2150 - this.birthYear;
    }

}

const martha = new StudentCl(`Martha`, 2012, `Computer Science`);
console.log(martha);
martha.introduce();
console.log(martha.calcAge());


//Objects.create

const PersonProto = {
    calcAge: function () {
        console.log(2037 - this.birthYear);
    },
    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
};


const steven = Object.create(PersonProto);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__);
console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init(`Sarah`, 1995);
console.log(sarah);
sarah.calcAge();

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear, course);
    this.course = course;
}
StudentProto.introduce = function() {
    console.log(`My name is ${this.firstName} and i study ${this.course}`);
}

const jay = Object.create(StudentProto);
console.log(jay);
jay.init('Jay', 2010, `CS`);
console.log(jay);
jay.calcAge();
jay.introduce();

*/
 


//coding challenge #1, #2, #3

const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
}
Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`Accelerating ${this.make} to ${this.speed}`);
}
Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`Braking ${this.make} to ${this.speed}`);
}

const bmw = new Car(`BMW`, 120);
const mercedes = new Car(`Mercedes`, 95);

bmw.accelerate();
bmw.brake();
bmw.accelerate();
mercedes.accelerate();
mercedes.accelerate();
bmw.accelerate();
mercedes.brake();


const EV = function (make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
}

EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;

EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
}

EV.prototype.accelerate = function () {
    this.speed += 20;
    this.charge -= 1;
    console.log(`${this.make} going at ${this.speed}, with a charge of ${this.charge}`);
}

const tesla = new EV(`Tesla`, 120, 23);
console.log(tesla);
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.brake();
tesla.chargeBattery(90);
console.log(tesla);
console.dir(tesla);

console.log(tesla.__proto__);

class CarCl {

    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`Accelerating ${this.make} to ${this.speed}`);
        return this;
    }

    brake() {
        this.speed -= 5;
        console.log(`Braking ${this.make} to ${this.speed}`);
        return this;
    }

    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(speedInMiles) {
        this.speed = speedInMiles * 1.6;
    }

}

const ford = new CarCl(`Ford`, 120);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.brake();
console.log(ford.speedUS);
ford.speedUS = ford.speedUS * 2;
ford.accelerate();

class EVCl extends CarCl {
    
    #charge;
    
    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }

    accelerate () {
        this.speed += 20;
        this.#charge -= 1;
        console.log(`${this.make} going at ${this.speed}, with a charge of ${this.#charge}`);
        return this;
    }

    chargeBattery (chargeTo) {
        this.#charge = chargeTo;
        return this;
    }


}

const rivian = new EVCl(`Rivian`, 120, 23);
rivian.accelerate().accelerate().brake().chargeBattery(80).brake().accelerate();
console.log(rivian);


/*
//encapsulation

class Account {
    //public fields (are on the instances)
    locale = navigator.language;
    
    //private fields (are on the instances)
    #movements = [];
    #pin; // will be set to undefined initially
    
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;
        //this._movements = []; // convention to make 'private' by adding '_' => protected ... 
        //this.locale = navigator.language;
    }
    
    //public methods
    deposit(value) {
        this.#movements.push(value);
        return this;
    }
    
    withdraw(value) {
        this.#checkBalance(value);
        this.deposit(-value);
        return this;
    }
    
    //private methods (not yet available in implementation)
    #checkBalance(value) {
        console.log('verifying balance');
    }
    
    
}

const acc1 = new Account(`Jonas`, `EUR`, 1111);
console.log(acc1);

//acc1.#movements.push(250); // bad practice... ; should be encapsulated obviously // as a private field -> does not work ... syntax error
//acc1.#movements.push(-140); // bad practice... ; should be encapsulated obviously

acc1.deposit(160);
acc1.withdraw(80);

console.log(acc1);

//acc1.#checkBalance(100); // does not work

//chaining
acc1.deposit(300).deposit(200).withdraw(10).withdraw(880);
console.log(acc1);


 */

