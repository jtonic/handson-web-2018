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
import sym from './rapid_es6/symbol';
import sym2 from './rapid_es6/symbol2';
import oe2 from './rapid_es6/object_extensions2';
import se from './rapid_es6/string_extensions';
import ne from './rapid_es6/number_extensions';
import re from './rapid_es6/regex_extensions';
import fe from './rapid_es6/function_extensions';

export default function () {
  console.log('============================');
  console.log('Rapid ECMAScript 6');
  console.log('============================');

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
  sym();
  sym2();
  oe2();
  se();
  ne();
  re();
  fe();
};
