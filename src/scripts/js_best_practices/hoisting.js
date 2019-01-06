
export default function () {

    console.log('============================');
    console.log('JavaScript best practices');
    console.log('Hoisting');
    console.log('============================');

    function reassign() {
        myVar = 20;
        var myVar;
    }
    reassign();
    console.log(myVar); // it is undefined because the var is searched only in the script file scope (not the reassign function scope).

    var myVar = 10;

    myFunc(20);
    // expression(); // boom!!! This is because of var hoisting
    function myFunc() {console.log('From my function');}

    let expression = function (){
        console.log('From my func expression');
    };
    expression();
};
