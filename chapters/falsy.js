function exec() {

    console.log('============================');
    console.log('Falsy expressions');
    console.log('============================');
    if (!0) {
        console.log('0 is falsy');
    }
    if (!false) {
        console.log('false is falsy');
    }
    if (!'') {
        console.log('"" is falsy');
    }
    if (!undefined) {
        console.log('undefined is falsy');
    }
    if (!NaN) {
        console.log('NaN is falsy');
    }
    if (!null) {
        console.log('null is falsy');
    }
    if (!Infinity) {
        console.log('Infinity is falsy?');
    }
    if (!{}) {
        console.log('{} is falsy?');
    }
    let emptyArray = [];
    if (!emptyArray) {
        console.log('Empty array ([]) is falsy?');
    }
}

export default exec;

