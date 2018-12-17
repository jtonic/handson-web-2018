

// ===============================================
// this, call, apply
// ===============================================
console.log('============================');
console.log('this, call, apply');
console.log('============================');

let person = {
    age: 42,
    getAge: function (prefix) {
        console.log(typeof (this), this);
        return prefix + ' ' + this.age;
    },
    toString: function () {
        return `You are ${this.age} old.`;
    }
};

console.log(person.getAge('You are '));
let jtonic = { age: 48 };
console.log(person.getAge.apply(jtonic, ['You are also']));
console.log(person.toString());
console.log(person.toString.call(jtonic));

// ===============================================
// operators
// ===============================================
console.log('============================');
console.log('Operators');
console.log('============================');

console.log(1 == '1');
console.log(1 == true);
console.log(1 == [1]);
console.log(1 === 1);
console.log(1 === true);

let conf = {name: "jtonic"};
// let conf = null; // when null the default value is used for settings
let settings = conf || {name: "unknown"};
let defaultConf = settings.name;
console.log(`settings: ${defaultConf}`);

// ===============================================
// falsy
// ===============================================
console.log('============================');
console.log('Falsy expressions');
console.log('============================');
if (!0) { console.log('0 is falsy'); }
if (!false) { console.log('false is falsy'); }
if (!'') { console.log('"" is falsy'); }
if (!undefined) { console.log('undefined is falsy'); }
if (!NaN) { console.log('NaN is falsy'); }
if (!null) { console.log('null is falsy'); }
if (!Infinity) { console.log('Infinity is falsy?'); }
if (!{}) { console.log('{} is falsy?'); }
let emptyArray = [];
if (!emptyArray) { console.log('Empty array ([]) is falsy?'); }

// ===============================================
// deconstruction arrays
// ===============================================
console.log('============================');
console.log('array destruction');
console.log('============================');
let carNumbers = [1, 3, 1000, 4000];
let first, second, rest;
[first, , ...rest] = carNumbers;
console.log(first, second, rest);

// ===============================================
// deconstruction objects
// ===============================================
console.log('============================');
console.log('object destruction');
console.log('============================');
let car = {
    id: 48,
    name: 'skoda'
};

let { id: carId, name: carName } = car;
// let carId, carName;
// ({ id: carId,  name: carName } = car);
console.log(carId,  carName);

// ===============================================
// spread operator
// ===============================================
console.log('============================');
console.log('spread operator');
console.log('============================');
function startCars(car1, car2, ...theRest) {
    console.log(car1,  car2,  theRest);
}

let cars = [1, 2, 3, 4, 5, 6];
startCars(...cars);

// ===============================================
// rest parameters
// ===============================================
console.log('============================');
console.log("rest parameters");
console.log('============================');
function startCarz(day, ...cars) {
    console.log(day);
    cars.forEach(id => console.log(`Start car ${id}`));
}
startCarz(1, 2, 3, 4, 5);

// ===============================================
// typeof
// ===============================================
console.log('============================');
console.log("typeof() examples:");
console.log('============================');
console.log(typeof (1));
console.log(typeof ('a'));
console.log(typeof (false));
console.log(typeof ({}));
console.log(typeof (function () {}));
console.log(typeof ([]));
console.log(typeof (null));
console.log(typeof (NaN));
console.log(typeof (Infinity));
console.log(typeof (undefined));

// ===============================================
// conversions
// ===============================================
console.log('============================');
console.log("Conversions");
console.log('============================');

let n1 = Number.parseInt('123');
let n2 = Number.parseInt('20ABC');
let n3 = Number.parseInt('X20ABC');
console.log(n1, n2, n3);
console.log(typeof (n1));
let s1 = (1/0).toString();
console.log(s1, typeof (s1));

let s2 = n1.toString();
console.log(typeof (s2), s2);

// ===============================================
// loops examples
// ===============================================
console.log('============================');
console.log('Loops');
console.log('============================');

let i = 0;
for (; i < 12; i++) {
    if (i === 8) {
        break;
    }
    if (i === 3) {
        continue;
    }
    console.log(i);
}

