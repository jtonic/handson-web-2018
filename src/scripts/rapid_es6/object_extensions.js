'use strict';

function exec() {

  console.log('============================');
  console.log('object extensions');
  console.log('============================');

  let fName = 'Antonel-Ernest';
  let lName = 'Pazargic';
  let age = 'age';
  let ageValue = 48;
  let greeting = 'greeting';
  let mName = 'doId';
  let fieldName = 'male';
  //ES 6
  let o1 = {
    fName,
    lName,
    ['full' + ' ' + 'name']: fName + lName,
    [age]: ageValue,
    print() {
      return `${this.fName} ${this.lName}`;
    },
    "print full name"() {
      return `Full name: ${this.fName} ${this.lName}`;
    },
    [greeting]() {
      return `Hello ${this.print()}`;
    },
    [mName + '-001']() {
      console.log('Do it!!!');
    },
    get [fieldName]() { return true; },
    set [fieldName](value) {  }
  };
  console.log(o1, o1.print(), o1["print full name"](), o1[age]);
  console.log(o1[greeting]());
  console.log('fullname', o1['f' + 'ull name']);
  o1[mName + '-001']();
  console.log(o1.male);

  // ES 5
  let old1 = {
    fName:  fName,
    lName: lName,
    greeting: function () {
      console.log(`Hello ${fName} ${lName}`);
    }
  };
  console.log(old1);
  old1.greeting();
}

export default exec;
