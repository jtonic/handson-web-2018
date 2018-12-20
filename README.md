# Generated with Webpack Frontend Starterkit


EcmaScript 6
----
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
