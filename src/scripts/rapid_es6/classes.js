'use strict';

console.log('============================');
console.log('[ES6] Classes');
console.log('============================');

export default function () {
    class Income {

        constructor() {
            console.log('in constructor');
        }

        print() {
            console.log('in print');
        }
    }

    let income = new Income();
    console.log(typeof Income, typeof income);
    console.log(income instanceof Income);
    income.print();

    let newTask = class Task {
        constructor() {
            console.log('in task class constructor');
        }
    };
    new newTask();

    let Task1 = function () {
        console.log('in construction function');
    };
    let obj1 = {};
    let task1 = new Task1();
    Task1.call(obj1);

    // Class constructor Income cannot be invoked without 'new'
    // Income.call(obj1);

    class Project {

        // static properties cannot be declared in a class definition
        // static let description = 'Project description';

        static getId() {
            return 1;
        }

        constructor(name) {
            this.name = name;
            console.log('constructing project', name);
        }
    }

    class SoftwareProject extends Project {


        constructor(name) {
            // Uncommenting the super method invocation will lead to the following error
            // Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
            super(name + '-software project');
            console.log('in SoftwareProject constructor');
        }

    }

    let sPrj = new SoftwareProject('myProject');
    console.log(sPrj.name);

    let project = {
        getCount() {
            return 55;
        }
    };
    let softwareProject = {
        getCount() {
            return super.getCount() + 6;
        }
    };

    Object.setPrototypeOf(softwareProject, project);

    console.log(softwareProject.getCount());

    console.log(Project.getId());
    console.log(SoftwareProject.getId());

    // static properties can be declared the old way
    Project.description = 'project description';
    console.log(Project.description);
};
