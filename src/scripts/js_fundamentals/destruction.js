function exec() {

    console.log('============================');
    console.log('array destruction');
    console.log('============================');
    let carNumbers = [1, 3, 1000, 4000];
    let first, second, rest;
    [first, , ...rest] = carNumbers;
    console.log(first, second, rest);

    console.log('============================');
    console.log('object destruction');
    console.log('============================');
    let car = {
        id: 48,
        name: 'skoda'
    };

    let {id: carId, name: carName} = car;
    // let carId, carName;
    // ({ id: carId,  name: carName } = car);
    console.log(carId, carName);
}

export default exec;

