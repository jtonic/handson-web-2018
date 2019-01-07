export default function () {

    console.log('============================');
    console.log('[ES6] Symbol');
    console.log('============================');

    const s1 = Symbol('article');
    const s2 = Symbol('article');
    console.log(typeof s1, s1, s2, s1 === s2);

    const t1 = Symbol.for('task');
    const t2 = Symbol.for('task');
    console.log(t1 === t2);

    const inc = {
        amount: 2000,
        [Symbol.for('gross')]: 3000
    };
    console.log(inc[Symbol.for('gross')]);
    const props = Object.getOwnPropertyNames(inc);
    const symbols = Object.getOwnPropertySymbols(inc);
    console.log(props, symbols);
};
