console.log('============================');
console.log('Classes');
console.log('============================');

class Vehicle {

    constructor(id, type = 'unknown') {
        this.id = id;
        this.type = type;
    }

    start() {
        console.log(`Starting: ${this.id} of type ${this.type}`);
    }
}

class Automobile extends Vehicle {
    constructor(id) {
        super(id,  'automobile');
    }

    start() {
        super.start();
        console.log("In automobile...")
    }
}

export {Vehicle, Automobile};
