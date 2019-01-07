export default function () {

    console.log('========================================================');
    console.log('Java script path: course 4: JavaScript objects and prototypes');
    console.log('https://app.pluralsight.com/paths/skill/javascript');
    console.log('Constructor functions.');
    console.log('========================================================');

    function Cat(name, color) {
        this.name = name;
        this.color = color;
        this.greeting = function () {
            console.log(`Hello ${this.name} - ${this.color}`);
        };
    }

    let milli = new Cat('Milly', 'brown');
    console.log(typeof Cat, Cat);
    console.log(typeof milli, milli, milli.color);
    milli.greeting();

    let pissi = new Cat('Pissi');
    console.log(pissi);

    // uncomment the following to get the error
    // TypeError: Cannot set property 'name' of undefined
    // let flufy = Cat('Flufy', 'white');

    let wolfy = {
        name: 'Wolfy',
        color: 'gray'
    };
    wolfy.display = function () {
        return `${this.name}, ${this.color}`;
    };
    console.log(typeof wolfy, wolfy, wolfy.display());

    console.log('create object with Object.create');

    let doggy = Object.create(Object.prototype, {
        name: {
            value: 'Doggy',
            enumerable: true,
            configurable: true,
            writable: true,
        },
        color: {
            value: 'dark gray',
            enumerable: true,
            writable: true,
            configurable: true
        }
    });
    console.log(doggy, doggy.name, doggy.color);

    class Dog {
        constructor(name, color) {
            this.name = name;
            this.color = color;
        }

        display() {
            console.log(`${this.name} ${this.color}`);
        }
    }

    let doggy2 = new Dog('Doggy2', 'brown');
    console.log(typeof Dog, typeof doggy2, doggy2);
    doggy2.display();
};
