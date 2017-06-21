var util = require('util');

function Person() {
	this.firstname = 'John';
	this.lastname = 'Doe';
}

Person.prototype.greet = function() {
	console.log('Hello ' + this.firstname + ' ' + this.lastname);
}

function Policeman() {
	Person.call(this)
	this.badgenumber = '1234';
}

var John = new Person()

util.inherits(Policeman, Person);

John.greet();

var Jane = new Policeman();
console.log(Jane.badgenumber);
Jane.greet();