export default function () {

    console.log('============================');
    console.log('JavaScript best practices');
    console.log('With statement');
    console.log('============================');

    let obj = {
        a: {
            b: {
                c: 'Value'
            }
        }
    };
    var c = 'New value';
    console.log(obj.a.b.c);

    // with is no longer allow in strict mode
    /*
    with (obj.a.b) {
        console.log(c); // the var c is referred here instead of c property
    }
    */

    (function (b) {
        console.log(b.c);
    })(obj.a.b);
}
