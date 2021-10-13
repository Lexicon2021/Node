const express = require('express');
const app = express();
const User = require('./User');
const connection = require('./connection');
const PORT = process.env.PORT || 1337;

connection();

app.use(express.json());

app.post('/user', (req, res) => {
    const data = new User(req.body);
    data.save()
    .then(user => {
        console.log('user saved', user);
        res.send('user saved');
    })
    .catch(err => {
        console.log(err);
    });
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
})