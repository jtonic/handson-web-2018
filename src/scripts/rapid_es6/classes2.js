'use strict';

console.log('============================');
console.log('[ES6] Classes2');
console.log('============================');

export default function () {

    class Project {
        constructor() {
            console.log(typeof new.target, new.target, new.target.getDescription());
        }
    }

    class SoftwareProject extends Project {
        constructor() {
            super();
        }

        static getDescription() {
            return 'Software project description';
        }
    }

    new SoftwareProject();
};
