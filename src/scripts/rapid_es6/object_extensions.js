function exec() {

    console.log('============================');
    console.log('object extensions');
    console.log('============================');

    const fName = 'Antonel-Ernest';
    const lName = 'Pazargic';
    const age = 'age';
    const ageValue = 48;
    const greeting = 'greeting';
    const mName = 'doId';
    const fieldName = 'male';
    //ES 6
    const o1 = {
        fName,
        lName,
        ['full' + ' ' + 'name']: fName + lName,
        [age]: ageValue,
        print() {
            return `${this.fName} ${this.lName}`;
        },
        "print full name"() {
            return `Full name: ${this.fName} ${this.lName}`;
        },
        [greeting]() {
            return `Hello ${this.print()}`;
        },
        [mName + '-001']() {
            console.log('Do it!!!');
        },
        get [fieldName]() { return true; },
        set [fieldName](value) {  }
    };
    console.log(o1, o1.print(), o1["print full name"](), o1[age]);
    console.log(o1[greeting]());
    console.log('fullname', o1['f' + 'ull name']);
    o1[mName + '-001']();
    console.log(o1.male);

    // ES 5
    const old1 = {
        fName:  fName,
        lName: lName,
        greeting: function () {
            console.log(`Hello ${fName} ${lName}`);
        }
    };
    console.log(old1);
    old1.greeting();
}

export default exec;
