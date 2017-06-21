var fs = require('fs');
var zlib = require('zlib')

var readable = fs.createReadStream(__dirname + '/greet.txt');

var writable = fs.createWriteStream(__dirname + '/greet-copy.txt')

readable.on('data', function(chunk) {
	console.log(chunk.length)
	// Copes content from greet.txt to greet-copy.txt
	writable.write(chunk)
})

var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');

var gzip = zlib.createGzip();

readable.pipe(writable);

readable.pipe(gzip).pipe(compressed);

// Import file file system

// Create readable and set gree.txt to readable
// Create writable and set green-copy.txt to writable
// Use prototype event emitter 'on' method to listen for incoming data and write data to green-copy.txt
// Create file to store compressed text file for future writing
// Create gzip file
// Pipe readable to writable, cannot method chain here yet 
// Since readable is now writable, method chaining works 
// Pipe to gzip to compress data and then pipe to compressed file when completed