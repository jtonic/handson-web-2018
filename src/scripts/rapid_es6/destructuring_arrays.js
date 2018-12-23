'use strict';

console.log('============================');
console.log('[ES6] Destructuring arrays');
console.log('============================');

function exec() {

  let arr1 = [1, 2, 3];
  let [a, , , d = 4] = arr1;
  console.log(d);

  let a1, b1;
  [a1,  b1] = arr1;
  console.log(a1, b1);

  let [first, ...rest] = arr1;
  console.log(rest);

  let [a2, b2, [c2, d2]] = [1, 2, [3, 4]];
  console.log(c2, d2);

  let name = 'Antonel';
  let [f, s] = name;
  console.log(f, s);

  try {
    let [a4] = null; // undefined is in the same boat with null
    console.log(a4);
  } catch (e) {
    console.log(e.name, e.message);
  }
}

export default exec;
