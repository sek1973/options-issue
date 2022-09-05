const express = require('express');
const app = express();

const hostname = '127.0.0.1';
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome!');
});

app.get('/api/data', (req, res) => {
    res.send('{"data": "Data for GET"}');
});

app.options('/api/data', (req, res) => {
    res.send('{"data": "Data for OPTIONS"}');
});

const server = app.listen(port, hostname, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Listening at http://%s:%s", host, port);
});