const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    const html = '<h1>hej</h1><p>koolt va?</p>';
    res.send(html);
});

app.get('/exempel', (req, res) => {
    const attSkicka = {
        msg: 'Ok',
        status: 200
    };
    res.json(attSkicka);
});

app.get('/djur/:djur', (req, res) => {
    const x = 'din favorit djur är ' + req.params.djur;
    res.send(x);
});

app.post('/email', (req, res) => {
    const email = req.body.email;
    res.status(200).json({
        msg: 'email sparad',
        email
    })
});

app.listen(1234, () => {
    console.log('Server on port 1234');
});