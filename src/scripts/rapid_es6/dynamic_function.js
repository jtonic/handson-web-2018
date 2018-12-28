"use strict";

export default function () {

    console.log('============================');
    console.log('array destruction');
    console.log('============================');

    let fn = new Function('amount = 1000', "console.log('dynamic function', amount);");
    fn();
}
