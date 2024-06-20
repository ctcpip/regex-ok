# regex-ok  👍

let's you know if your JS RegExp is ok (not necessarily great)

## install

```sh
npm install regex-ok
```

## use

```js
// import esm
import isRegexOk from 'regex-ok';

// or require cjs
const isRegexOk = require('regex-ok');

// pass a RegExp
let re = /^yee$/;
let ok = isRegexOk(re);  // true

// or pass a string
let re = '^yee$'
let ok = isRegexOk(re);  // true
```
