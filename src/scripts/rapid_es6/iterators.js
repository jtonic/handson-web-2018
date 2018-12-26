"use strict";

export default function () {

  console.log('============================');
  console.log('[ES6] Iterators');
  console.log('============================');

  let arr1 = [1, 2, 3];
  console.log(typeof arr1[Symbol.iterator]);
  let it = arr1[Symbol.iterator]();
  it.next();
  it.next();
  let last = it.next();
  console.log(last.value, last.done);
  console.log(it.next());

  let markerId = {
    [Symbol.iterator]() {
      let nextId = 8000;
      return {
        next() {
          let value = nextId > 8002 ? undefined : nextId++;
          let done = !value;
          return {value, done};
        }
      };
    }
  };

  for (const v of markerId) {
    console.log(v);
  }
};
