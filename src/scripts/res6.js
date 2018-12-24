"use strict";

import af from './rapid_es6/arrow_function';
import dp from './rapid_es6/default_params';
import df from './rapid_es6/dynamic_function';
import rs from './rapid_es6/rest_spread';
import oe from './rapid_es6/object_extensions';
import fol from './rapid_es6/for_of_loop';
import st from './rapid_es6/string_template';
import dea from './rapid_es6/destructuring_arrays';
import deo from './rapid_es6/destructuring_objects';
import mds from './rapid_es6/modules';
import cls from './rapid_es6/classes';
import cls2 from './rapid_es6/classes2';

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
  st();
  dea();
  deo();
  mds();
  cls();
  cls2();
}

export default exec;
