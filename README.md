# Generated with Webpack Frontend Starterkit


EcmaScript 6
----
- NaN is not equal with anything, even with itself
    ```ecmascript 6
    console.log(NaN === NaN); // return false
    console.log(Object.is(NaN, NaN)) //return true
    ```
- let, const are block scoping variable, constant unlike var which is not (and is hoisted)

- array functions don't have their own this
- bind function copy a function and pass to it a new this
- import a default exported module with alias
```ecmascript 6
// module.js
export default exec;
// client.js
import {default as alias} from 'my-module';
```
- use let instead of var - var gets hoisted.
- Security:
  - Man in the middle attacks:
    - HTTP header `Strict-Transport-Security`
    - cookies attributes 
      `Secure`, `HttpOnly`
  - XSS (Cross Site Scripting) attacks:
    - HTTP headers:
      - CSP `Content-Security-Policy`,
      - CORS - Cross Origin Resource Sharing`Access-Control-Allow-Origin` ()
- pay attention to __arrow functions__
  - arrow function does not allow to change __this__ using __bind, call or apply__ methods,
  - __this__ in arrow functions does refer to running context (window) not to the context of the arrow. By comparison the normal function refers the context it is in. __SO, 
 
    ___WHENEVER YOU SEE A STRANGE VALUE OF THIS THINK ABOUT CHANGING IT WITH A NORMAL FUNCTION___ 
  - fat arrow functions don't have prototype.
- default parameters:
  - a default parameter can use the other parameters value
  - a default parameter can use an outside function
  - arguments - ignore the default parameters
  ```ecmascript 6
  function income2(amount = 1000, taxes = amount * (1 - 0.12)) {
      console.log('income2 fun arguments length', arguments.length); // 1
      console.log(`amount ${amount}, taxes ${taxes}`);
    }
    income2(3000);
  ```
  - works even with dynamic function (new Function(params, body))
  
- Object creation
    - object literal
    ```ecmascript 6
    let fluffy = {name: 'Fluffy', color: 'Brown'};  
    ```
    - constructor function
    ```ecmascript 6
    function Cat(name, color) {
      this.name = name;
      this.color = color;
    }
    let fluffy = new Cat('Fluffy', 'Brown');
    ```
    - Object.create (this happens under the hood with all other ways of object creation)
    ```ecmascript 6
    let doggy = Object.create(Object.prototype, {
        name: {
            value: 'Doggy',
            enumerable: true,
            configurable: true,
            writable: true,
        },
        color: {
            value: 'dark gray',
            enumerable: true,
            writable: true,
            configurable: true
        }
    });
    ```
    - using classes
    ```ecmascript 6
    class Dog {
        constructor(name, color) {
            this.name = name;
            this.color = color;
        }

        display() {
            console.log(`${this.name} ${this.color}`);
        }
    }

    let doggy2 = new Dog('Doggy2', 'brown');
    ```

- object properties
    - setter/getter for an object property
    ```ecmascript 6
    Reflect.defineProperty(cat1, 'fullName', {
            get() {
                return `${this.name.fName} ${this.name.lName}`;
            },
            set(value) {
                let names = value.split(' ');
                this.name.fName = names[0];
                this.name.lName = names[1];
            }
        });
    ```
    - freezing an object property
    ```ecmascript 6
      Object.freeze(cat1.name);
    ```
    
- String template (string interpolation)
  - an interpolated string can be passed to a function using the infix notation
  ```ecmascript 6
  function greeting(msg) {
    console.log(typeof msg, msg, msg[0]);
  }
  greeting `antonel`;
  ```
- destructuring
  - requires iterator
  ```ecmascript 6
    let [a4] = undefined; // null is not iterable as well
    console.log(a4);
  // Uncaught TypeError: undefined is not iterable
  ```
  
- modules
  - import statements get hoisted
  - imports all exports from a module
  ```ecmascript 6
  // in module2.js
  let firstName = 'Antonel-Ernest';
  let lastName = 'Pazargic';
  let age = 48;
  
  export {firstName, lastName, age};  

  //in modules.js
  import * as person from './module2';
  console.log(person, person.firstName, person.lastName, person.age);
  ```
  - imported variables from a module are read-only. They are not imported as variable
  ```ecmascript 6
  // in module1.js
  export let projectName = 'handson-web-2018';
  
  // in modules.js
  import {projectName} from './module1';
  projectName = 'newProject';
  ```
  
- classes 
    - classes are not hoisted;
    ```ecmascript 6
    // Uncaught ReferenceError: Income is not defined
    let income1 = new Income();
    
    class Income { /*...*/ }
    ```
    - class definition can be assigned to a variable;
    ```ecmascript 6
    let newTask = class Task { };
    new newTask();
    ```  
   
    - we cannot call `call` on a class instance
    ```ecmascript 6
    class Income {}
    let obj1 = {};
    // Class constructor Income cannot be invoked without 'new'
    Income.call(obj1);
    ```
    - class creation does not pollute the global window namespace
    
    - a static field (static let a = 1;) cannot be declared in the class. 
    Declare it as usual with 
    ```ecmascript 6
      class Project { }
      Project.description = 'project description';
    ```
    
    - class constructor is in fact the prototype of the class 
    
- symbols
    - well-known ones:
        - toStringTag
        - toPrimitive
        - isConcatSpreadable
            
- Object extensions
    - `Object.assign` is not looking at prototype chain at all
    - Use Object.is instead of ===
        
- Number extensions:
    - use the following extensions of Number:
        - parseInt, parseFloat
        - isNaN,
        - isFinite,
        - isInteger
        - isSafeInteger

-  Array extensions
    - use `Array.of(...T)` instead of `Array(...T)` because `Array(100).length == 100` not 1
    
- Map
    - transform a map into an array:
    ```ecmascript 6
    let keysArr = [...map.keys()];
    let valuesArr = [...map.values()];
    let entriesArr = [...map.entries()];
    ```
    - transform an array of array into a map
    ```ecmascript 6
    let arr = [[{capital: 'Bucharest'}, 100], [{capital: 'Sophia'}, 200]];
    let map = new Map(arr);
    ```
    
- Reflect API
    - prevent extensions:
    ```ecmascript 6
      Reflect.preventExtensions(cr2);
      cr2.galaxy = 'Milky Way'; // Uncaught TypeError: Cannot add property galaxy, object is not extensible
    ```
    - check if an object is extensible:
    ```ecmascript 6
      Reflect.isExtensible(cr2);
    ```
    - API: 
        - create a class instance
        `Reflect.construct`, 
        - working with properties:
        `Reflect.has`, `Reflect.get`, `Reflect.set`, `Reflect.defineProperty`, `Reflect.deleteProperty`
        - call a function:
        `Reflect.apply`,
        - work with prototype:
        `Reflect.setPrototypeOf()`, `Reflect.getPrototypeOf()`
        
- Proxy 
    - it is very useful for prototyping:
    ```ecmascript 6
        let t = {
          tableId: 87
        };
        
        let p = new Proxy({}, {
          get(target, p, receiver) {
              return `Property "${p}" does not exist.`;
          }
        });
        Reflect.setPrototypeOf(t, p);
    ```
    - proxy can be revocable. A revocable proxy can be constructed with `Proxy.revocable`
    ```ecmascript 6
        let t2 = {
              tableId: 87
          };
        let {proxy, revoke} = Proxy.revocable(t2, {
                get(target, p, receiver) {
                    console.log(`get property ${p} on ${target}`);
                    return Reflect.get(target, p, receiver) + 100;
                }
            });
        console.log(proxy.tableId);
        revoke();
        console.log(proxy.tableId); // BOOM!!!! Uncaught TypeError: Cannot perform 'get' on a proxy that has been revoked
    ```

### Best practices:

- DON'T USE `==`. Use `===` instead. 
```ecmascript 6
    console.log(0 == false);
    console.log(0 === false);
```
- check the variable existence this way
```ecmascript 6
    if (typeof x !== "undefined") {
        return 'x exists';
    }
    // this is also good
    if (x !== undefined) { }
```
- pass arguments to function instead of getting them from arguments iterator. DONT'T USE THIS:
```ecmascript 6
    function foo() {
        if (arguments.length > 1)   {
            console.log(`do smth with ${arguments[0]}`);
        }
    }
```
- Strive to create variable using the const or let or var (in this specific order)
- Var and function declaration at the top of the scope
- for function expression assign the anonymous function to let or const, NOT var
```ecmascript 6
    sum(1, 1)
    let sum = function (a, b) { return a + b; };
```

### Useful eslint rules for clean code (best practices)
in .eslintrc file
```json
    {
      "rules": { // https://eslint.org/docs/rules/
        "semi": ["error", "always"],
        "brace-style": [2, "1tbs", { "allowSingleLine": true }],
        "indent": ["error", 4], // 4 is the default, just to have it here
        "eqeqeq": "warn",
        "no-else-return": "warn",
        "no-const-assign": "error",
        "no-var": "warn",
        "prefer-const": "warn",
        "block-scoped-var": "error",
        "vars-on-top": "error"
      }
    }
```
- Configuration of eslint in IntelliJ Idea
    - Enable ESLint
        - Go to Preferences | Languages & Frameworks | JavaScript | Code Quality Tools | ESLint
        - Check enable (the defaults are fine)
     
    - Run eslint inspection
        - press `cmd shift a`
        - type `Run inspection by Name` (cmd alt shift i)
        - type `eslint`
        - check uncommitted files | All (or select the change list which are going to be solely committed)
    - Make sure you have Perform code analysis checked in commit dialog. This will perform the eslint checks on the modified/new files.
        
- DON'T USE GLOBAL VARIABLES. Use strict mode ('use strict') to prevent global variables. __In ECMAScript modules, which always have strict mode semantics, the directives are unnecessary.__

### Common JS errors:
- when a const is not initialized -> __SyntaxError__
```ecmascript 6
const MY_CONST;
console.log(MY_CONST);
// Uncaught SyntaxError: Missing initializer in const declaration
```
- const cannot be reassigned -> __TypeError__
```ecmascript 6
const MY_CONST = 100;
MY_CONST = 200;
console.log(MY_CONST);
// Uncaught TypeError: Assignment to constant variable.
```

### Still unclear (requires more effort to master)
- __this__ in fat arrow function 
- __ByteArray, little/big endian__
- `Reflect#getOwnPropertyDescriptor`

### What to add to the project (TODOs):
- Bootstrap
- create an npm script to run the eslint


