import dem from './js_best_practices/demo';
import hoi from './js_best_practices/hoisting';
import gva from './js_best_practices/global_var';

export default function() {
    dem();
    hoi();
    // gva(); // Uncomment here and BOOM (ReferenceError) because of the global var usage in strict mode
};
