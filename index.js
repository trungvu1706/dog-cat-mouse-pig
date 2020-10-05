var cat = require('./cat');
var mouse = require('./mouse');
var dog = require('./Dog');
var Dog = require('./Dog');


var cat = new cat();
var mouse = new mouse('Mickey');
var dog = new Dog();
try {
    cat.eat(dog);
} catch (error) {
    console.log('Error while cat eating a dog');
}

console.log(cat);