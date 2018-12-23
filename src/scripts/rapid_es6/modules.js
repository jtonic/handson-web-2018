"use strict";

console.log('before imports in modules.js');

import type, {projectId as id, projectName, projectVersion} from './module1';
import * as person from './module2';
console.log('after imports');

console.log('============================');
console.log('[ES6] Modules');
console.log('============================');

console.log('Project Id:', id, 'ProjectName:', projectName);
console.log('Project type:', type, 'projectVersion:', projectVersion);

console.log(person, person.firstName, person.lastName, person.age);

function exec() {

}

export default exec;
