export default function () {

    console.log('============================');
    console.log('[ES6] Arrow functions');
    console.log('============================');

    const person1 = {
        name: 'jtonic',
        walk: function () {
            console.log('person1 walk', typeof this, this);
        }
    };
    person1.walk();

    const person2 = {
        name: 'Irina',
        // the following commended code is strange - instead of returning Window returns undefined
        // walk: () => console.log('Irina is walking', this)
        walk: function () {
            return () => console.log(`${this.name} is walking...`);
        }
    };
    person2.walk()();

    const person3 = {
        name: 'Tutye'
    };
    person2.walk().bind(person3)();

    const fn1 = () => console.log('sleeping');
    const afHasPrototype = fn1.hasOwnProperty('prototype');
    console.log(`arrow function has own prototype ${afHasPrototype}`);

    const fn2 = function () {
        console.log('f2');
    };
    const nfHasOwnPrototype = fn2.hasOwnProperty('prototype');
    console.log(`Normal function has onw prototype ${nfHasOwnPrototype}`);
};
