export default function () {

    console.log('============================');
    console.log('JavaScript best practices');
    console.log('Global variable and strict mode');
    console.log('============================');

    function modifyVariable(msg) {
        newVal = msg;
        console.log(newVal);
    }

    modifyVariable('print me');
    console.log(newVal);
}
