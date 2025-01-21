// npm basic
const _ = require('lodash');
console.log(_.capitalize('hello'));

// async example (event loop)
console.log('start');
setTimeout(() => {
  console.log('setTimeout');
}, 1000);
console.log('end');

