export default function () {

    console.log('========================================================');
    console.log('Java script path: course 4: JavaScript objects and prototypes');
    console.log('https://app.pluralsight.com/paths/skill/javascript');
    console.log('Prototype and inheritance.');
    console.log('========================================================');

    function Animal(voice) {
        this.voice = voice || 'grunt';
    }

    Animal.prototype.speak = function () {
        console.log(this.voice);
    };

    function Cat(name, color) {
        Animal.call(this, 'Meow');
        this.name = name;
        this.color = color;

    }

    let cat1 = new Cat('Fluffy', 'brown');
    console.log(Cat.prototype);
    console.log(cat1.__proto__);
    console.log(Cat.prototype === cat1.__proto__);

    Reflect.defineProperty(Array.prototype, 'last', {
        get() {
            return this[this.length - 1];
        }
    });

    let arr1 = ['one', 'two', 'three'];
    console.log(arr1.last);

    let scratchy = new Cat('Scratchy', 'yellow');
    let lowdy= new Cat('Lowdy', 'yellow');
    Cat.prototype.age = 4;
    console.log(scratchy, scratchy.age);
    console.log(scratchy.hasOwnProperty('age'));

    lowdy.age = 5;
    console.log(lowdy, lowdy.age, lowdy.__proto__.age);

    Cat.prototype = {age: 10};
    console.log(scratchy.age);
    let muffin = new Cat('Muffin', 'Dark gray');
    console.log(muffin, muffin.age);

    console.log(muffin.__proto__);
    console.log(muffin.__proto__.__proto__);
    console.log(muffin.__proto__.__proto__.__proto__);


    Cat.prototype = Object.create(Animal.prototype);
    Cat.prototype.constructor = Cat;
    let meow = new Cat('Meow', 'Black');

    console.log(meow instanceof Cat);
    console.log(meow instanceof Animal);
    meow.speak();
    console.log(meow);
    console.log(meow.__proto__);
    console.log(meow.__proto__.__proto__);
    console.log(meow.__proto__.__proto__.__proto__);
};
