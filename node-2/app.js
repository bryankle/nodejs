var greet = require('./greet1');
greet()

var greet2 = require('./greet2');
greet2.greet();

var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = 'Changed hello world!';

// References the same object; see pattern below to create new object with constructor
var greet3b = require('./greet3');
greet3b.greet();

var Greet4 = require('./greet4');
var grtr = new Greet4();
grtr.greet()

var greet5 = require('./greet5').greet;
greet5();