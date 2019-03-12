const express = require('express');
var path = require('path');

var app = express();

app.use(express.static('resources'))

/* - Main / INDEX PAGE - */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
});

app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
});


/* - INFO PAGE - */
app.get('/info', (req, res) => {
    res.sendFile(path.join(__dirname + '/info.html'))
});

/* - PICTURES PAGE - */

app.get('/pictures', (req, res) => {
    res.sendFile(path.join(__dirname + '/pictures.html'))
});



/* - PETS JSON PAGES - */
function pet(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
}

let jonathanpet = new pet(
    "Husky", 3, "Dog"
)

let craigpet1 = new pet("Giarc", 1, "Lion")
let craigpet2 = new pet("Sniff", 2, "Meerkat")
let jonathanpet1 = new pet("Husky", 3, "Dog")
let jonathanpet2 = new pet("Sparks", 4, "Dog")

app.get('/craigpet1', (req, res) => {
    res.json(craigpet1)
});

app.get('/craigpet2', (req, res) => {
    res.json(craigpet2)
});

app.get('/jonathanpet1', (req, res) => {
    res.json(jonathanpet1)
});

app.get('/jonathanpet2', (req, res) => {
    res.json(jonathanpet2)
});

/* - DATA PAGE - */
app.get('/data', (req, res) => {
    res.json({craigpet1, craigpet2, jonathanpet1, jonathanpet2})
});



app.listen(process.env.PORT || 8080)