export default function () {

    console.log('========================================================');
    console.log('Java script path: course 4: JavaScript objects and prototypes');
    console.log('https://app.pluralsight.com/paths/skill/javascript');
    console.log('Class based inheritance.');
    console.log('========================================================');

    class Animal {

        constructor (voice) {
            this.voice = voice || 'grunt';
        }
        speak() {
            console.log(this.voice);
        }
    }

    class Cat extends Animal {

        constructor(name, color) {
            super('meow');
            this.name = name;
            this.color = color;
        }
    }

    let meow = new Cat('Meow', 'Black');

    console.log(meow instanceof Cat);
    console.log(meow instanceof Animal);
    console.log(meow);
    meow.speak();
    console.log(meow.__proto__);
    console.log(meow.__proto__.__proto__);
    console.log(meow.__proto__.__proto__.__proto__);
};
