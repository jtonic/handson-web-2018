export default function () {

    console.log('============================');
    console.log('[ES6] Set / WeakSet');
    console.log('============================');

    let romania = {capital: 'Bucharest', population: 20000000};
    let bulgaria = {capital: 'Sophia', population: 15000000};

    let countries = new Set(['Romania', 'Bulgaria', 'Romania']);
    countries.add('England');
    console.log(countries, countries.size, countries.has('Romania'), countries.has('Italy'));

    console.log(...countries.keys());
    console.log(...countries.values());
    console.log(...countries.entries());

    let countries2 = new Set(countries);
    console.log(countries2.size, countries2);

    let ids = new Set([
        {id: 1},
        {id: 1}
    ]);
    console.log(...ids.keys(), ids.size);
    let id1 = {id: 1};
    let ids2 = new Set([
        id1, id1
    ]);
    console.log(...ids2.keys(), ids2.size);

    // WeakSet
    // it can contains only objects. Uncomment the following to get an Error
    // Uncaught TypeError: Invalid value used in weak set
    // let ids3 = new WeakSet([1, 2, 3]);
    let ids3 = new WeakSet([
        id1,
        {id: 2}
    ]);
    console.log(ids3, ids3.size, ids3.has(id1));
};
