function exec() {

    console.log('============================');
    console.log('this, call, apply');
    console.log('============================');

    let person = {
        age: 42,
        getAge: function (prefix) {
            console.log(typeof (this), this);
            return prefix + ' ' + this.age;
        },
        toString: function () {
            return `You are ${this.age} old.`;
        }
    };

    console.log(person.getAge('You are '));
    let jtonic = {age: 48};
    console.log(person.getAge.apply(jtonic, ['You are also']));
    console.log(person.toString());
    console.log(person.toString.call(jtonic));

    let irina = {age: 29};
    let irinaAge = person.toString.bind(irina);
    console.log(irinaAge());
}

export default exec;

