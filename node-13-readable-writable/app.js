var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/greet.txt', {encoding: 'utf8', highWaterMark: 32 * 1024});

var writable = fs.createWriteStream(__dirname + '/greet-copy.txt')

readable.on('data', function(chunk) {
	console.log(chunk.length)
	// Copes content from greet.txt to greet-copy.txt
	writable.write(chunk)
})