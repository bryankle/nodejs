'use strict';

class Person {
	constructor(firstname, lastname) {
		this.firstname = firstname;
		this.lastname = lastname;
	}
	greet() {
		console.log('Hello ' + this.firstname + ' ' + this.lastname);
	}
}

var util = require('util');

var John = new Person('John', 'Doe')


John.greet();
