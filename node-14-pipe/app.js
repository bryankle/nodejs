var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/greet.txt');

var writable = fs.createWriteStream(__dirname + '/greet-copy.txt')

readable.on('data', function(chunk) {
	console.log(chunk.length)
	// Copes content from greet.txt to greet-copy.txt
	writable.write(chunk)
})

readable.pipe(writable)