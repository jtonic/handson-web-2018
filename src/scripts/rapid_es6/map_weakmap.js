export default function () {

    console.log('============================');
    console.log('[ES6] Map / WeakMap');
    console.log('============================');

    let countries = new Map();
    let romania = {capital: 'Bucharest', population: 20000000};
    let bulgaria = {capital: 'Sophia', population: 15000000};
    countries.set(romania, 500000000);
    countries.set(bulgaria, 400000000);
    countries.forEach((v, k) => console.log(k, v));
    console.log(countries);

    let countriesArr = [
        [romania, 500000000],
        [bulgaria, 400000000],
    ];

    countries = new Map(countriesArr);
    console.log(countries, countries.size);
    console.log(countries.get(romania));
    console.log(countries.has(bulgaria));

    let areas = [...countries.values()];
    let descrCountries = [...countries.keys()];
    console.log(areas, descrCountries);
    let longDescCountries = [...countries.entries()];
    console.log(longDescCountries, longDescCountries[0][1], longDescCountries[1][0]);


    // weakMap
    let r = {capital: 'Bucharest', population: 20000000};
    let b = {capital: 'Sophia', population: 15000000};
    let countries2 = new WeakMap();
    countries2.set(r, 2000);
    countries2.set(b, 3000);
    console.log(countries2, countries.size);
    r = null;
    console.log(countries2, countries.size);
};
