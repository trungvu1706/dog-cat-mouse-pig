const Pig = require('./Pig');
const Dog = require('./Dog');


var pig = new Pig('Han');
var dog = new Dog('milu', 1);
pig.eat(dog);
pig.sayHi();