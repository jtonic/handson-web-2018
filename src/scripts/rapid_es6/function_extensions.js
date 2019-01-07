export default function () {

    console.log('============================');
    console.log('[ES6] Function extensions');
    console.log('============================');

    let fn = function exec() {
        return 1;
    };

    console.log(fn.name);

    fn = function () {
        return 1;
    };

    console.log(fn.name);

    class Calculator {
        add() {}
    }

    console.log(Calculator.name);
    const calc = new Calculator();
    console.log(calc.add.name);
}
