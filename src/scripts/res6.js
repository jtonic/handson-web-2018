"use strict";

import af from './rapid_es6/arrow_function';
import dp from './rapid_es6/default_params';
import df from './rapid_es6/dynamic_function';
import rs from './rapid_es6/rest_spread';
import oe from './rapid_es6/object_extensions';
import fol from './rapid_es6/for_of_loop';

console.log('============================');
console.log('Rapid ECMAScript 6');
console.log('============================');

function exec() {
  af();
  dp();
  df();
  rs();
  oe();
  fol();
}

export default exec;
