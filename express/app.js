var express = require('express');
var bodyParser = require('body-parser')
var app = express(); // since express returns a function, execute express and assign to app to access
var mongoose = require('mongoose');

mongoose.connect('mongodb://bkle:Bkl17520@ds043350.mlab.com:43350/bkletest')

var Schema = mongoose.Schema;
var personSchema = new Schema({
    firstname: String,
    lastname: String,
    address: String
});

var Person = mongoose.model('Person', personSchema);

var john = Person({
    firstname: 'John',
    lastname: 'Doe',
    address: '555 Main St.'
});

john.save(function(err) {
    if (err) throw err;
    console.log('person saved!')
})

var jane = Person({
    firstname: 'John',
    lastname: 'Doe',
    address: '555 Main St.'
});

jane.save(function(err) {
    if (err) throw err;
    console.log('person saved!')
})

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController')

var port = process.env.PORT || 3000; // process provided by node
// environmental variable provided within process
// we can supply the port to listen or default to 3000
app.set('view engine', 'ejs')

app.use('/assets', express.static(__dirname + '/public'))

app.use('/', function(req, res, next) {
    console.log('Request Url: ' + req.url);

    Person.find({}, function(err, users) {
        if (err) throw err;

        console.log(users)
    })

    next();
})

apiController(app);
htmlController(app);




app.listen(port);