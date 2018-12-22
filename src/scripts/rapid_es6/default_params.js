'use strict';

function exec() {


  function income1(amount = 1000, taxes = 0.12) {
    console.log(`amount ${amount}, taxes ${taxes}`);
  }

  income1(2000);
  income1(undefined, 0.3);

  function income2(amount = 1000, taxes = amount * (1 - 0.12)) {
    console.log('income2 fun arguments length', arguments.length);
    console.log(`amount ${amount}, taxes ${taxes}`);
  }
  income2(3000);
}

export default exec;
