'use strict';

function exec() {

  console.log('============================');
  console.log('[ES6] String template');
  console.log('============================');

  let name = 'Antonel';
  let age = 48;

  function greeting(msg) {
    console.log(typeof msg, msg, msg[0]);
  }
  greeting `antonel`;
  greeting `Hello ${name} of ${age} old`;

  function myInterpolation(segments, ...values) {
    console.log('segments', segments);
    console.log('values', values);
  }
  myInterpolation `Hello ${name} ${age} old!`;
}

export default exec;
