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
        if (typeof x !== "undefined") {
            return 'x exists';
        } else { // <- fix this eslint warn - no-else-return rule
            return 'x does not exists';
        }
    }

    console.log(exists());
};
