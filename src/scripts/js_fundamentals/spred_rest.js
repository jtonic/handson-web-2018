function exec() {

    console.log('============================');
    console.log('spread operator');
    console.log('============================');

    function startCars(car1, car2, ...theRest) {
        console.log(car1, car2, theRest);
    }

    const cars = [1, 2, 3, 4, 5, 6];
    startCars(...cars);

    console.log('============================');
    console.log("rest parameters");
    console.log('============================');

    function startCarz(day, ...carz) {
        console.log(day);
        carz.forEach(id => console.log(`Start car ${id}`));
    }

    startCarz(1, 2, 3, 4, 5);
}

export default exec;

