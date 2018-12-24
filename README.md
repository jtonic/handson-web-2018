# Generated with Webpack Frontend Starterkit


EcmaScript 6
----
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

### Installation

```
npm install
```

### Start Dev Server

```
npm start
```

### Build Prod Version

```
npm run build
```

### Features:

* ES6 Support via [babel](https://babeljs.io/) (v7)
* SASS Support via [sass-loader](https://github.com/jtangelder/sass-loader)
* Linting via [eslint-loader](https://github.com/MoOx/eslint-loader)

When you run `npm run build` we use the [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) to move the css to a separate file. The css file gets included in the head of the `index.html`.
