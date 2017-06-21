// OUTPUTTING HTML AND TEMPLATES ASYNCHRONOUSLY WITH STREAMS AND BUFFER

var http = require('http'); // Gets http module 
var fs = require('fs');

http.createServer(function(req, res) { // Request and send back response

    res.writeHead(200, { 'Content-Type': 'text/html' }) // Write to response stream, connect to readable file stream and pipe to response stream
    fs.createReadStream(__dirname + '/index.html').pipe(res); // Every chunk of data read from the file will be buffered and piped to http response stream; buffer stays small and application stays faster
   
}).listen(1337, '127.0.0.1'); // 127.0.0.1 is localhost; 1337 is port

 // Creates a server object from method createServer. Accerpts a callback function to be invoked
 // Is an event listener
