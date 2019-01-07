
function exec() {
    console.log('============================');
    console.log('Security');
    console.log('============================');

    // DON'T STORE SENSITIVE VALUES IN VARIABLES
    window.secretPassword = 'mySecretPassword';

    // AVOID USING EVAL BASED SCRIPT EXECUTION, BECAUSE THIS CAN BE HACKED BY INJECTING DIFFERENT SCRIPT
    const script = 'console.log("This is dynamically evaluated!!!");';
    // let script = 'alert("I\'m a hacker ;)");';
    eval(script);
}

export default exec;
