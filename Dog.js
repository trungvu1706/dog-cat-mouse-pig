function Dog(name, age) {
    this.name = name;
    this.age = age;

}

Dog.prototype.bark = function() {
    console.log('go goo .....');
}

module.exports = Dog;