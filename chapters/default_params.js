function exec() {

    console.log('============================');
    console.log('default parameter');
    console.log('============================');

    let trackingCar = function track(carId, city = 'Bucharest') {
        console.log(`tracking ${carId} in ${city}`);
    };
    trackingCar(123);
    trackingCar(456, 'Galati');
}

export default exec;
