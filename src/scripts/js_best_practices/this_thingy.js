export default function () {

    console.log('============================');
    console.log('JavaScript best practices');
    console.log('This oddness in JS');
    console.log('============================');

    let obj1 = {
        val: 'value 1',
        print: function () {
            console.log(this);      // [1]
            console.log(this.val);  // [2]
        }
    };

    obj1.print();

    let obj2 = {
        val: 'value 2'
    };
    obj2.print = obj1.print;
    obj2.print();

    // let printIt = obj1.print; // this is going to blow up the [2] in strict mode
    const printIt = obj1.print.bind(obj2);
    printIt();
}
