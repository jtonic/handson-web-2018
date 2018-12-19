function exec() {

    console.log('============================');
    console.log('Loops');
    console.log('============================');

    let i = 0;
    for (; i < 12; i++) {
        if (i === 8) {
            break;
        }
        if (i === 3) {
            continue;
        }
        console.log(i);
    }
}

export default exec;

