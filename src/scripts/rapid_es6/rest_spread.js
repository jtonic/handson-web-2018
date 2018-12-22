'use strict';

console.log('============================');
console.log('rest/spread');
console.log('============================');

function exec() {

  function income(amount, ...taxes) {
    console.log(taxes instanceof Array);
    console.log(taxes);
  }

  income(2000);
  income(2000, [0.2, 0.12, 0.3]);

  let arr1 = Array(1, 2, 3);
  let arr2 = Array(...[, , 3]);
  let arr3 = Array(...[, , ,]);
  let arr4 = [...[, , ,]];
  console.log(arr1);
  console.log(arr2);
  console.log(arr3);
  console.log(arr4);

  console.log(Math.max(...'43210'));
  let arr5 = ['a',...'bcd', 'e'];
  console.log(arr5);
}

export default exec;
