"use strict";

export default function () {

    console.log('============================');
    console.log('[ES6] Generators');
    console.log('============================');

    function* gen() {
        let seed = 8000;
        while (true) {
            yield seed++;
        }
    }

    let it = gen();
    for (let i = 0; i < 3; i++) {
        console.log(it.next());
    }

    for (const value of gen()) {
        if (value > 8004) break;
        console.log(value);
    }

    let arrGen = function* arrayGen() {
        let arr = Array(yield, yield, yield);
        console.log(arr[2]);
    };

    let iter = arrGen();
    iter.next();
    iter.next(1);
    iter.next(2);
    iter.next(3);

    function* generator1() {
        yield 1;
        yield [2, 3, 4];
    }

    let iter1 = generator1();
    console.log(iter1.next().value, iter1.next().value, iter1.next().value);

    function* generator2() {
        yield 1;
        yield* [2, 3, 4];
    }

    let iter2 = generator2();
    console.log(iter2.next().value, iter2.next().value, iter2.next().value);
};
