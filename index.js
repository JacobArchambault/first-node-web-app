import express, { urlencoded } from 'express';
const app = express();
app.use(urlencoded({ extended: true }));     // allows handling complex objects
;

app.get('/', (_req, res) => res.sendFile('index.html', { root: '.' }));

app.get('/location', (req, res) => {
    console.log(req.query); // displays query values as an object
    console.log(`number of values: ${Object.keys(req.query).length}`);
    res.send(`Location: ${req.query.city}, ${req.query.state}`);
});

app.post('/handleForm', (req, res) => res.send(req.body.username + " chose: " + req.body.season));

app.use((_req, res) => res.status(404).send("Sorry, no such page!"));

app.listen(3000, () => console.log('Listening on port 3000, ctrl-c to quit.'));