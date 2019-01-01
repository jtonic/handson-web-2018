"use strict";

export default function () {

    console.log('============================');
    console.log('[ES6] Proxy');
    console.log('============================');
    
    function Person() {
        this.firstName = 'Antonel';
        this.lastName = 'Pazargic';
        this.salary = 5000;
    }

    let jtonic = new Person();

    let handler = new Proxy(jtonic, {
        get(target, p, receiver) {
            if (p === 'salary') {
                return 'Denied';
            }
            return Reflect.get(target, p, receiver);
        }
    });

    console.log(handler);
    console.log(handler.firstName, handler.lastName, handler.salary);

    function getSalary() {
        return 50000;
    }
    let salary = new Proxy(getSalary, {
        apply(target, thisArg, argArray) {
            console.log(`calling ${target} with ${argArray}`);
            return Reflect.apply(target, thisArg, argArray);
        }
    });
    console.log(salary());

    let t = {
        tableId: 87
    };

    let p = new Proxy({}, {
        get(target, p, receiver) {
            return `Property "${p}" does not exist.`;
        }
    });
    Reflect.setPrototypeOf(t, p);
    console.log(t.tableId);
    console.log(t.size);

    let t2 = {
        tableId: 87
    };

    let {proxy, revoke} = Proxy.revocable(t2, {
        get(target, p, receiver) {
            console.log(`get property ${p} on ${target}`);
            return Reflect.get(target, p, receiver) + 100;
        }
    });
    console.log(proxy, revoke, proxy.tableId);
    revoke();
    // cannot call get for a revoked proxied object.
    // uncomment the following to get the following exception
    // Uncaught TypeError: Cannot perform 'get' on a proxy that has been revoked
    // console.log(proxy.tableId);
};
