export default function () {

    console.log('============================');
    console.log('[ES6] Number extensions');
    console.log('============================');

    console.log(Number.parseInt === parseInt, typeof Number.parseInt);
    console.log(Number.parseFloat === parseFloat,
        typeof Number.parseFloat);

    const nan = 'NaN';
    console.log(isNaN(nan), Number.isNaN(nan));
    const fin = '8000';
    console.log(isFinite(fin), Number.isFinite(fin));

    console.log(Number.isInteger(30), Number.isInteger(NaN), Number.isInteger(undefined), Number.isInteger(3.1), Number.isInteger(null), Number.isInteger(Infinity));

    console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, Number.MIN_VALUE, Number.MAX_VALUE);

    console.log(Number.isSafeInteger(Math.pow(2, 53)), Number.isSafeInteger(Math.pow(2, 53) - 1));
}
