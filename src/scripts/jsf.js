import {Vehicle, Automobile, default as cars} from "./js_fundamentals/cars";
import json from "./js_fundamentals/json";
import cf from "./js_fundamentals/constructor_function";
import dp from "./js_fundamentals/default_params";
import af from "./js_fundamentals/arrow_function";
import tcab from "./js_fundamentals/this_call_apply_bind";
import op from "./js_fundamentals/operators";
import fls from "./js_fundamentals/falsy";
import dest from "./js_fundamentals/destruction";
import rp from "./js_fundamentals/spred_rest";
import to from "./js_fundamentals/typeof";
import conv from "./js_fundamentals/conversions";
import lp from "./js_fundamentals/loop";
import bom from "./js_fundamentals/bom";
import dom from "./js_fundamentals/dom";
import tcf from "./js_fundamentals/try_catch_finally";
import pr from "./js_fundamentals/promises";
import xhr from "./js_fundamentals/xhr";
import jq from "./js_fundamentals/jquery";
import fm from './js_fundamentals/html_form';
import sec from './js_fundamentals/security';

console.log('============================');
console.log('JavaScript fundamentals');
console.log('============================');

function exec() {

  cars();

  let car2 = new Vehicle(123);

  car2.id = 456;

  car2.start();
  console.log(car2, car2.id);
  let auto1 = new Automobile(123, 'automobile');
  auto1.start();
  console.log(`automobile: ${auto1.id}`);

  cf();

  dp();

  af();

  tcab();

  op();

  fls();

  dest();

  rp();

  to();

  conv();

  lp();

  json();

  bom();

  dom();

  tcf();

  pr();

  xhr();

  jq();

  fm();

  sec();
}

export default exec;
