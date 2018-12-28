'use strict';

export default function () {

    console.log('============================');
    console.log('[ES6] For of loop');
    console.log('============================');

    const str = 'abcdef';
    for (const s of str) {
        console.log(s);
    }
    const arr1 = [, ,];
    let idx = 0;
    for (const it of arr1) {
        idx++;
        console.log(it);
    }
    console.log(idx);
    const arr2 = [1, 2, 3, 4, 5];
    for (const i of arr2) {
        console.log(i);
    }
}
