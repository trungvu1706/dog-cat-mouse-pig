const chalk = require('chalk');

function Pig(name) {
    this.name = name;
    this.stomach = [];
}

Pig.prototype.eat = function(dog) {
    this.stomach.push(dog);
};

Pig.prototype.sayHi = function() {
    console.log('Hi! My name is ' + chalk.red(this.name));
}

module.exports = Pig;