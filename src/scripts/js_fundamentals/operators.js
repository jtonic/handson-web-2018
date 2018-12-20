function exec() {

    console.log('============================');
    console.log('Operators');
    console.log('============================');

    console.log(1 == '1');
    console.log(1 == true);
    console.log(1 == [1]);
    console.log(1 === 1);
    console.log(1 === true);

    let conf = {name: "jtonic"};
// let conf = null; // when null the default value is used for settings
    let settings = conf || {name: "unknown"};
    let defaultConf = settings.name;
    console.log(`settings: ${defaultConf}`);
}

export default exec;

