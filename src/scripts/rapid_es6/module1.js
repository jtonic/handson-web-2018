console.log('============================');
console.log('[ES6] Module1');
console.log('============================');

console.log('in module1.js');

const projectVersion = '0.1.1';
const projectType = 'Java';
export const projectId = 99;
export const projectName = 'handson-web-2018';
export {projectType as default, projectVersion};
export const income = {
    net: 1000,
    gross: 1500
};
export function showIncome() {
    console.log('income:', income.net, income.gross);
}
