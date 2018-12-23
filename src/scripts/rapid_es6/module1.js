"use strict";

console.log('============================');
console.log('[ES6] Module1');
console.log('============================');

console.log('in module1.js');

let projectVersion = '0.1.1';
let projectType = 'Java';
export let projectId = 99;
export let projectName = 'handson-web-2018';
export {projectType as default, projectVersion};
