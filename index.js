var express = require('express');
var app = express();
var bodyParser = require('body-parser');      // need to have installed body-parser with npm
app.use(bodyParser.urlencoded({ extended: true }));     // allows handling complex objects

app.get('/', function (req, res) {             // send the default page
    var response = "<html><body><p><a href='/location?city=Louisville&state=KY'>city & state</a>";
    response += "<p> <form action='/handleForm' method='post'>";
    response += "Name: <input name='username'> <p> My Favorite Seasons: <br> ";
    response += "<input type=checkbox name='season' value='spring'>Spring <br> ";
    response += "<input type=checkbox name='season' value='summer'>Summer<br>";
    response += "<input type=checkbox name='season' value='fall'>Fall<br>";
    response += "<input type=checkbox name='season' value='winter'>Winter<br> <p>";
    response += "<input type=submit value='Submit form!'></form></body> </html>";
    res.send(response);
});

app.get('/location', function (req, res) {       // handle the GET request
    console.log(req.query);                     // displays query values as an object
    var city = req.query.city;                  // 'Louisville'
    var state = req.query.state;                // 'KY'
    var length = Object.keys(req.query).length; // 2 values
    console.log("number of values: " + length);
    res.send('Location: ' + city + ", " + state);
});

app.post('/handleForm', (req, res) => res.send(req.body.username + " chose: " + req.body.season));

app.use((_req, res) => res.status(404).send("Sorry, no such page!"));

app.listen(3000, () => console.log('Listening on port 3000, ctrl-c to quit.'));