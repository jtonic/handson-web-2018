export default function () {

    console.log('============================');
    console.log('JavaScript best practices');
    console.log('This oddness in JS');
    console.log('============================');

    const obj1 = {
        val: 'value 1',
        print: function () {
            console.log(this);      // [1]
            console.log(this.val);  // [2]
        }
    };

    obj1.print();

    const obj2 = {
        val: 'value 2'
    };
    obj2.print = obj1.print;
    obj2.print();

    // let printIt = obj1.print; // this is going to blow up the [2] in strict mode
    const printIt = obj1.print.bind(obj2);
    printIt();


    const obj3 = function () {
        console.log(this);
        this.name = 'jtonic';
        this.printName = function () {
            console.log(this);
            console.log(this.name);
        };
        this.callback = function () {
            // setTimeout(this.printName, 2000); // DON'T DO THIS!!!
            setTimeout(this.printName.bind(this), 4000);
        };
    };
    new obj3().printName();
    new obj3().callback();

    const obj4 = function () {
        const self = this;
        console.log(this);
        this.name = 'jtonic';
        this.printName = function () {
            console.log(self);
            console.log(self.name);
        };
        this.callback = function () {
            setTimeout(self.printName, 5000);
        };
    };
    new obj4().callback();
}
