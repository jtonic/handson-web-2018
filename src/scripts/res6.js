import af from './rapid_es6/arrow_function';
import dp from './rapid_es6/default_params';
import df from './rapid_es6/dynamic_function';
import rs from './rapid_es6/rest_spread';

console.log('============================');
console.log('Rapid ECMAScript 6');
console.log('============================');

function exec() {
  af();
  dp();
  df();
  rs();
}

export default exec;
