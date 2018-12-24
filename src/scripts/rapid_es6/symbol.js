"use strict";
export default function () {

  console.log('============================');
  console.log('[ES6] Symbol');
  console.log('============================');

  let s1 = Symbol('article');
  let s2 = Symbol('article');
  console.log(typeof s1, s1, s2, s1 === s2);

  let t1 = Symbol.for('task');
  let t2 = Symbol.for('task');
  console.log(t1 === t2);

  let inc = {
    amount: 2000,
    [Symbol.for('gross')]: 3000
  };
  console.log(inc[Symbol.for('gross')]);
  let props = Object.getOwnPropertyNames(inc);
  let symbols = Object.getOwnPropertySymbols(inc);
  console.log(props, symbols);
};
