const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 1234;
const morgan = require('morgan');

app.use(morgan('dev'));

const api = require('./routes/api');


app.use(bodyParser.json());
app.use('/api', api);
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});