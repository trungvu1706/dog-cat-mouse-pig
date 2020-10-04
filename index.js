const Pig = require('./Pig');
const Dog = require('./Dog');


var pig = new Pig('Han');
var dog = new Dog('milu', 2);
pig.eat(dog);
console.log(pig);
pig.sayHi();