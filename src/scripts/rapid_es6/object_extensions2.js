export default function () {

    console.log('============================');
    console.log('object extensions 2');
    console.log('============================');

    const a = {
        x: 1
    };

    const b = {
        y: 2
    };

    console.log(a.y);
    Object.setPrototypeOf(a, b);
    console.log(a.y);

    const target = {};
    Object.assign(target, a, b);
    console.log(target);

    const c = {
        c: 3
    };

    Object.setPrototypeOf(b, c);
    // Object.assign is not looking at prototype chain at all
    Object.assign(target, a, b);
    console.log(target);

    const d = {};
    Object.defineProperty(d, 'd', {
        value: 5,
        // In order to be included in the Object.assign the property has to be enumerable
        enumerable: true
    });

    const t2 = {};
    Object.assign(t2, a, b, d);
    console.log(t2);

    const a1 = NaN;
    console.log(a1 === a1,  a1 === NaN, Object.is(a1, NaN));
    let a2 = 0, a3 = -0;
    console.log(a2 === a3, Object.is(a2, a3));
};
