let myModul = require('./test'); //знах. в цій самі папці

let newModule = new myModul();

console.log(newModule.hello());
console.log(newModule.goodbye());