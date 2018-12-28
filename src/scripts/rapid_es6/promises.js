"use strict";

export default function () {

    console.log('============================');
    console.log('[ES6] Promises');
    console.log('============================');

    function async(booRes, delay = 2) {
        let p = new Promise(function (resolve, reject) {
            console.log('in promise code');
            setTimeout(function () {
                console.log(`after ${delay} sec`);
                if (booRes) {
                    resolve('OK');
                } else {
                    reject('Not OK');
                }
            }, delay * 1000);
        });
        return p;
    }

/*
    let p1 = async(true);
    p1.then(value => console.log(`success ${value}`),
        reason => console.log(`error: ${reason}`)
    );
    p1 = async(false);
    p1.then(
        value => console.log(`success ${value}`),
        reason => console.log(`error: ${reason}`)
    );

    let p2 = Promise.resolve('All is OK');
    p2.then(
        value => console.log(`success. ${value}`),
        reason => console.log(`error ${reason}`)
    );

    let p3 = Promise.resolve('Success in p3.');
    let p4 = Promise.reject('Error in p4.');
    Promise.all([p3, p4]).then(
        value => console.log(`p3 p4 combined is OK. ${value}`),
        reason => console.log(`p3 p4 combined is not OK. ${reason}`)
    );
*/

    console.log('promises race');
    console.log('-----------------------------');
    const p5 = async(true, 3);
    const p6 = async(true, 6);
    const p7 = async(false, 4);
    Promise.race([p5, p6, p7]).then(
        value => console.log(`success in race ${value}`),
        reason => console.log(`error in race ${reason}`)
    );
}

