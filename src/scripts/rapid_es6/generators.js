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

    console.log('generator with return');
    console.log('---------------------');
    function* generator3() {
        yield 9000;
        yield 9001;
        yield 9002;
    }
    let iter3 = generator3();
    console.log(iter3.next());
    console.log(iter3.return(-1));
    console.log(iter3.next());

    console.log('generator with throw - caught exception in generator itself');
    console.log('--------------------');
    function* generator4() {
        try {
            yield 9000;
            yield 9001;
            yield 9002;
        } catch (e) {
            yield -1;
        }
    }

    let iter5 = generator4();
    console.log(iter5.next());
    console.log(iter5.throw(new Error('Error thrown by the generator client')));
    console.log(iter5.next());

    console.log('generator with throw - uncaught error');
    console.log('--------------------');
    let iter4 = generator3();
    console.log(iter4.next());
    console.log(iter4.throw(new Error('Error thrown from the generator client')));
    console.log(iter4.next());
};
