function jsonExec() {

    console.log('============================');
    console.log('JSON');
    console.log('============================');

    let str = `
    [
        { "carId": 1 },
        { "carId": 2 },
        { "carId": 3 }
    ]
`;
    let carz = JSON.parse(str);
    console.log(carz);

    console.log(JSON.stringify(carz));

    console.log('JSON chapter completed.');
}

export default jsonExec;
