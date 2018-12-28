'use strict';

export default function() {

  console.log('============================');
  console.log('[ES6] Destructuring objects');
  console.log('============================');

  let person = {
    firstName: 'Antonel-Ernest',
    lastName: 'Pazargic',
    age: 48
  };

  let {firstName, lastName, age} = person;
  console.log(firstName, lastName, age);

  let fName, lName, ag;
  // We have to use braces when destructure an object and assign value
  ({firstName: fName, lastName: lName, age: ag} = person);
  console.log(fName, lName, ag);

  let income = {
    net: 5000,
    gross: 8000
  };
  let net, gross;
  ({ net,  gross } = income);
  console.log(net, gross);
}
