var module1 = require("./module1")();
var module2 = require("./module1")();
module1.name = "module 1";
module2.name = "module 2";
console.log(module1);
console.log(module2);