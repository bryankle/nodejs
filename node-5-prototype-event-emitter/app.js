var EventEmitter = require('events');
var util = require('util');

function Greetr() {
	this.greeting = "Hello world!";
}
// Greetr inherits EventEmitter prototype
// Any object created by Greetr will have methods from EventEmitter
util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function(data) {
	console.log(this.greeting + ': ' + data);
	// Greetr method travels up the prototype chain to access the 'emit' method
	this.emit('greet', data);
}

var greeter1 = new Greetr();

greeter1.on('greet', function(data) {
	console.log('Someone greeted: ' + data);
});

greeter1.greet('Bryan');