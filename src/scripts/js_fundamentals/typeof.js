function exec() {

    console.log('============================');
    console.log("typeof() examples:");
    console.log('============================');
    console.log(typeof (1));
    console.log(typeof ('a'));
    console.log(typeof (false));
    console.log(typeof ({}));
    console.log(typeof (function () {
    }));
    console.log(typeof ([]));
    console.log(typeof (null));
    console.log(typeof (NaN));
    console.log(typeof (Infinity));
    console.log(typeof (undefined));
}

export default exec;

