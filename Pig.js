const chalk = require('chalk');

function Pig(name) {
    this.name = name;
    this.stomach = this.stomach;
}

Pig.prototype.eat = function(rice) {
    this.stomach.push(rice);
};

Pig.prototype.sayHi = function() {
    console.log('Hi! My name is ' + chalk.red(this.name));
}

module.exports = Pig;