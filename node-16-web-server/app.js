// OUTPUTTING HTML AND TEMPLATES SYNCHRONOUSLY

var http = require('http'); // Gets http module 
var fs = require('fs');

http.createServer(function(req, res) { // Request and send back response

    res.writeHead(200, { 'Content-Type': 'text/html' }) // Need quotes since values are not proper JS; MIME type in property
    var html = fs.readFileSync(__dirname + '/index.html',
    'utf8');
    var message = 'Hello world...';
    html = html.replace('{Message}', message);
    res.end(html); // Response with new line
}).listen(1337, '127.0.0.1'); // 127.0.0.1 is localhost; 1337 is port

 // Creates a server object from method createServer. Accerpts a callback function to be invoked
 // Is an event listener
