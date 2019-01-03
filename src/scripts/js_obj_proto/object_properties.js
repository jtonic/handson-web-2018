'use strict';

export default function () {

    console.log('========================================================');
    console.log('Java script path: course 4: JavaScript objects and prototypes');
    console.log('https://app.pluralsight.com/paths/skill/javascript');
    console.log('Object properties.');
    console.log('========================================================');

    let cat = {
        name: 'Fluffy',
        color: 'Yellow'
    };
    console.log(cat['name']);
    cat['eye color'] = 'black';
    console.log(cat['eye color']);
    console.log(Reflect.getOwnPropertyDescriptor(cat, 'name'));

    Reflect.defineProperty(cat, 'name', {writable: false});
    // Uncomment the following to get the error
    // TypeError: Cannot assign to read only property 'name' of object '#<Object>'
    // cat.name = 'Scratchy';
    console.log(cat.name);

    let cat1 = {
        name: {
            fName: 'Scratchy',
            lName: 'Paza'
        },
        color: 'Black'
    };
    Reflect.defineProperty(cat1, 'name', {writable: false});
    // cat1.name = 'Gigi B'; //this doesn't work
    cat1.name.fName = 'Gigi';
    console.log(cat1.name);

    // Uncomment the following to get the error
    // TypeError: Cannot assign to read only property 'fName' of object '#<Object>'
    // Object.freeze(cat1.name);
    // cat1.name.fName = 'John';


    Reflect.defineProperty(cat1, 'name', {enumerable: false});
    for (const prop in cat1) {
        console.log(`${prop}: ${cat1[prop]}`);
    }
    console.log(Reflect.ownKeys(cat1)); // This show non-enumerable properties
    console.log(Object.keys(cat1)); // This doesn't show the enumerable properties

    console.log(JSON.stringify(cat1));
    console.log(cat1.name); // property is still shown when is not enumerable

    Reflect.defineProperty(cat1, 'name', {configurable: false});
    // uncomment the following to get the error
    // TypeError: Cannot delete property 'name' of #<Object>
    // delete cat1.name;
    console.log(cat1.name);

    Reflect.defineProperty(cat1, 'fullName', {
        get() {
            return `${this.name.fName} ${this.name.lName}`;
        },
        set(value) {
            let names = value.split(' ');
            this.name.fName = names[0];
            this.name.lName = names[1];
        }
    });
    console.log(cat1.fullName);
    cat1.fullName = 'George B';
    console.log(cat1);
};
