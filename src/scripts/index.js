import {Vehicle, Automobile} from "../../chapters/cars";
import json from "../../chapters/json";
import cf from "../../chapters/constructor_function";
import dp from "../../chapters/default_params";
import af from "../../chapters/arrow_function";
import tcab from "../../chapters/this_call_apply_bind";
import op from "../../chapters/operators";
import fls from "../../chapters/falsy";
import dest from "../../chapters/destruction";
import rp from "../../chapters/spred_rest";
import to from "../../chapters/typeof";
import conv from "../../chapters/conversions";
import lp from "../../chapters/loop";

let car2 = new Vehicle(123);
car2.id = 456;
car2.start();
console.log(car2, car2.id);
let auto1 = new Automobile(123, 'automobile');
auto1.start();
console.log(`automobile: ${auto1.id}`);

json();

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
