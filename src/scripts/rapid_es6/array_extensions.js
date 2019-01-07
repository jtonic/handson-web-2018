export default function () {

    console.log('============================');
    console.log('[ES6] Array extensions');
    console.log('============================');

    let arr1 = Array(100);
    let arr2 = Array(100, 200);
    console.log(arr1.length, arr2.length);
    arr1 = Array.of(100);
    console.log(arr1.length);

    let salaries = [1000, 2000, 3000];
    let taxes = Array.from(salaries, v => v * 0.10);
    console.log(taxes);

    let adjustedSalaries = Array.from(salaries, function (v) {
        return v + this.adjustment;
    }, {adjustment: 10});
    console.log(adjustedSalaries);

    // arrow function does not allow to change this
    // let adjustedSalaries2 = Array.from(salaries, v => v + this.adjustment, {adjustment: 10});
    // console.log(adjustedSalaries2);

    let newSalaries1 = salaries.fill(4000);
    console.log(salaries, newSalaries1);
    salaries = [1000, 2000, 3000];
    newSalaries1 = salaries.fill(4000, 1, 2);
    console.log(salaries, newSalaries1);

    salaries = [1000, 2000, 3000];
    const found1 = salaries.find(value => value >= 2000);
    const found2 = salaries.find(value => value >= 5000);
    const found3 = salaries.find(function (value, index, array) {
        return value === this;
    }, 3000);
    const found4 = salaries.find(function (value, index, array) {
        return value === this.mySalary;
    }, {mySalary: 2000});
    console.log(found1, found2, found3, found4);

    let ids = ['A', 'B', 'C'];
    console.log(ids.entries(), ...ids.entries(), ...ids.keys(), ...ids.values());
};
