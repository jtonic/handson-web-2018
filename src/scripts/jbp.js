import dem from './js_best_practices/demo';
import hoi from './js_best_practices/hoisting';
import gva from './js_best_practices/global_var';
import pro from './js_best_practices/properties';
import wit from './js_best_practices/with_stat';
import thi from './js_best_practices/this_thingy';

export default function() {
    dem();
    hoi();
    // gva(); // Uncomment here and BOOM (ReferenceError) because of the global var usage in strict mode
    pro();
    wit();
    thi();
};
