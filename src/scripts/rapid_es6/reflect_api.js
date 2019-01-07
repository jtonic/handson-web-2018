export default function () {

    console.log('============================');
    console.log('[ES6] Reflect API');
    console.log('============================');

    class Restaurant {

    }

    console.log(typeof Restaurant);
    console.log(typeof Reflect);

    let r = Reflect.construct(Restaurant, []);
    console.log(r instanceof Restaurant);
    console.log(typeof r);

    class Location {
        constructor(city) {
            this.city = city;
        }
    }

    class CityRestaurant extends Location {
        constructor(name, city) {
            super(city);
            this.name = name;
            this._country = 'Romania';
            console.log(`${name} in ${city}`);
        }

        show(prefix) {
            console.log(`${prefix} ${this.name} in ${this.city}`);
        }

        get country() {
            return this._country;
        }

        set country(value) {
            this._country = value;
        }
    }

    let cr = Reflect.construct(CityRestaurant, ['La mama', 'Bucharest']);
    console.log(cr);

    class MyRestaurant {
        constructor() {
            console.log(`new.target = ${new.target}`);
        }
    }

    function restaurantMaker() {
        console.log('in MyRestaurant maker');
    }

    let mr = Reflect.construct(MyRestaurant, [], restaurantMaker);
    console.log('mr', mr);

    Reflect.apply(CityRestaurant.prototype.show, {name: 'Close to the moon', city: 'Bucharest'}, ['REST:']);

    console.log('prototype of CityRestaurant', Reflect.getPrototypeOf(CityRestaurant));

    let prt = {
        getId() {
            return 67;
        }
    };
    Reflect.setPrototypeOf(cr, prt);
    console.log(cr.getId());

    let cr2 = new CityRestaurant('La placinte', 'Bucharest');
    const cr2Name = Reflect.get(cr2, 'name');
    const cr2City = Reflect.get(cr2, 'city');
    const cr2Country = Reflect.get(cr2, 'country', {_country: 'Bulgaria'});
    console.log(cr2Name, 'in', cr2City, 'from', cr2Country);

    console.log('has name?', Reflect.has(cr2, 'name'), 'has city?', Reflect.has(cr2, 'city'));
    Reflect.set(cr2, 'city', 'Galati');
    cr2.show('REST:');

    console.log(Reflect.ownKeys(cr2));

    Reflect.defineProperty(cr2, 'continent', {
        value: 'Europa',
        configurable: true,
        enumerable: true
    });
    console.log(cr2.continent, cr2['continent']);

    let person = {
        id: 1,
        firstName: 'Antonel',
        middleName: 'Ernest',
        lastName: 'Pazargic'
    };
    console.log(person.middleName);
    Reflect.deleteProperty(person, 'middleName');
    console.log(person.middleName);
    console.log(Reflect.getOwnPropertyDescriptor(cr2, 'name'));

    console.log(cr2);
    console.log('cr2 is extensible?', Reflect.isExtensible(cr2));
    Reflect.preventExtensions(cr2);
    console.log('cr2 is extensible after preventExtensions call?', Reflect.isExtensible(cr2));
    // uncomment the following line to get an compilation error
    // Uncaught TypeError: Cannot add property galaxy, object is not extensible
    // cr2.galaxy = 'Milky Way';
    console.log(cr2);
    console.log(cr2.galaxy);
};
