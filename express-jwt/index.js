const express = require('express');
const PORT = process.env.PORT || 3000;
const pages = require('./routes/pages');
const secureRoute = require('./routes/secure');

const app = express();

app.use(express.json());

app.use(express.static('public'));

app.use('/', pages);
app.use('/secure', secureRoute);

app.listen(PORT, () => {
    console.log('Listening on port ', PORT);
});