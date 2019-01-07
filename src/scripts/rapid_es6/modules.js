console.log('before imports in modules.js');

import type, {projectId as id, projectName, projectVersion, income, showIncome} from './module1';
import * as person from './module2';
console.log('after imports');

console.log('============================');
console.log('[ES6] Modules');
console.log('============================');

income.gross = 3000;
income.net = 2000;
console.log(income);

// imported projectName is read-only even if it has been exported as variable (let)
// projectName = 'newProject';

console.log('Project Id:', id, 'ProjectName:', projectName);
console.log('Project type:', type, 'projectVersion:', projectVersion);

console.log(person, person.firstName, person.lastName, person.age);
showIncome();

function exec() {

}

export default exec;
