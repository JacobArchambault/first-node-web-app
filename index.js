var express = require('express');
var bodyParser = require('body-parser');      // need to have installed body-parser with npm
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));     // allows handling complex objects

app.get('/', (_req, res) => res.send("<html><body><p><a href='/location?city=Louisville&state=KY'>city & state</a><p> <form action='/handleForm' method='post'>Name: <input name='username'> <p> My Favorite Seasons: <br> <input type=checkbox name='season' value='spring'>Spring <br> <input type=checkbox name='season' value='summer'>Summer<br><input type=checkbox name='season' value='fall'>Fall<br><input type=checkbox name='season' value='winter'>Winter<br> <p><input type=submit value='Submit form!'></form></body> </html>"));

app.get('/location', (req, res) => {
    console.log(req.query); // displays query values as an object
    console.log(`number of values: ${Object.keys(req.query).length}`);
    res.send(`Location: ${req.query.city}, ${req.query.state}`);
});

app.post('/handleForm', (req, res) => res.send(req.body.username + " chose: " + req.body.season));

app.use((_req, res) => res.status(404).send("Sorry, no such page!"));

app.listen(3000, () => console.log('Listening on port 3000, ctrl-c to quit.'));