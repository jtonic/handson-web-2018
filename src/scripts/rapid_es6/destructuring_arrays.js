export default function () {

    console.log('============================');
    console.log('[ES6] Destructuring arrays');
    console.log('============================');

    const arr1 = [1, 2, 3];
    const [a, , , d = 4] = arr1;
    console.log(d);

    let a1, b1;
    [a1,  b1] = arr1;
    console.log(a1, b1);

    const [first, ...rest] = arr1;
    console.log(rest);

    const [a2, b2, [c2, d2]] = [1, 2, [3, 4]];
    console.log(c2, d2);

    const name = 'Antonel';
    const [f, s] = name;
    console.log(f, s);

    try {
        const [a4] = null; // undefined is in the same boat with null
        console.log(a4);
    } catch (e) {
        console.log(e.name, e.message);
    }
}
