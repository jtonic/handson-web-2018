export default function () {

    console.log('============================');
    console.log('JavaScript best practices');
    console.log('Properties');
    console.log('============================');

    let obj = {
        fName: 'jtonic',
        lName: 'Paza',
        age: 49
    };
    console.log(obj);

    let age = 48;
    console.log(age);

    delete obj.fName;
    console.log(obj);

    // delete obj; // uncomment this and eslint blows up.

    Reflect.defineProperty(obj, 'age', {
        writable: false
    });
    console.log(Reflect.getOwnPropertyDescriptor(obj, 'age'));
    // obj.age = 55; // uncomment this and will get TypeError: Cannot assign to read only property 'age' of object '#<Object>'
    console.log(obj);

    let a = 200;
    let b = 0o12;
    console.log(a + b);
}
