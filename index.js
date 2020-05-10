var Dog = require('./Dog');
var Cat = require('./Cat');

var dog = new Dog('Wake');
var tom = new Cat();
dog.eat(tom);
console.log(dog);