export default function () {

    function retObj() {
        return { // move this curly braces on the next line -> code brakes
            fName: 'Antonel',
            lName: 'Pazargic'
        };
    }

    console.log(retObj());

    console.log(0 == false);
    console.log(0 === false);

    function exists(x) {
        if (x !== undefined) {
            return 'x exists';
        } else { // <- fix this eslint warn - no-else-return rule
            return 'x does not exists';
        }
    }

    function hiddenPassedArgs() {
        console.log(arguments);
        console.log(arguments.length);
        if (arguments.length >= 1) {
            return `the argument passed is ${arguments[0]}`;
        }
        return "No passed arguments";
    }

    console.log(exists(), exists(0), exists(false), exists(NaN));

    console.log(hiddenPassedArgs(), hiddenPassedArgs(1));
};
