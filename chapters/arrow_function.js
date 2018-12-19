function exec() {

    console.log('============================');
    console.log('arrow function');
    console.log('============================');

    let sum = (a, b) => a + b;
    console.log(`sum of 1 + 2 is ${sum(1, 2)}`);

    let print = _ => console.log(_);
    print('a');
}

export default exec;

