function exec() {

    console.log('============================');
    console.log('constructor function, prototype');
    console.log('============================');

    function Car(carId) {
        this.carId = carId;
    }

    Car.prototype.start = function () {
        console.log(`Starting car ${this.carId}`);
    };

    let audi = new Car(123);
    audi.start();
}

export default exec;

