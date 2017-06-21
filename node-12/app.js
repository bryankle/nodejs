var fs = require('fs');	

// Synchronous
var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet)

// Asynchronous
var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', 
	// Error first callback; accepts an error object as the first parameter
	function(err, data) {
		console.log(data)
	}
)

console.log('Done!')

