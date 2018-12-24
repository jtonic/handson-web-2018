"use strict";

export default function () {

  console.log('============================');
  console.log('[ES6] Symbol2');
  console.log('============================');

  let Task = function () {

  };
  let task = new Task();
  console.log(task.toString());

  Task.prototype[Symbol.toStringTag] = 'My task';
  console.log(task.toString());

  let arr1 = [1, 2, 3];
  let arr2 = arr1.concat([4, 5]);
  console.log(arr2);
  arr1[Symbol.isConcatSpreadable] = false;
  console.log([].concat(arr1));

  let values = [1, 2, 3];
  let arr3 = values + 100;
  console.log(typeof arr3, arr3);
  values[Symbol.toPrimitive] = function (hint) {
    console.log(hint);
    return 40;
  };
  let arr4 = values + 100;
  console.log(typeof arr4, arr4);
};
